// ── Constants ──────────────────────────────────────────────────────────────
const DEFAULT_BASE_URL = 'https://api.rdsec.trendmicro.com/prod/aiendpoint/v1';
const ENDPOINT_PATHS = {
  models: 'models',
  chat: 'chat/completions',
  embed: 'embeddings',
  audio: 'audio/speech',
  image: 'images/generations'
};

// ── Vendor rules (order matters — most specific first) ────────────────────
const VENDOR_RULES = [
  // TrendMicro internal models
  { label: 'TrendMicro', color: '#ef4444', bg: '#1a0a0a', letter: 'T',
    test: id => /^(rone-|primus-|cybertron-)/i.test(id) },
  // OpenAI
  { label: 'OpenAI', color: '#10a37f', bg: '#0a1a14', letter: 'O',
    test: id => /^(gpt-|o1$|o1-|o3-|o4-|o5-|text-embedding|text-davinci|text-babbage|text-curie|text-ada|tts-|whisper-|dall-e)/i.test(id) },
  // Anthropic
  { label: 'Anthropic', color: '#d97706', bg: '#1a1208', letter: 'A',
    test: id => /^claude-/i.test(id) },
  // Google (Gemini, Gemma)
  { label: 'Google', color: '#4285f4', bg: '#0a1220', letter: 'G',
    test: id => /^(gemini-|gemma-|palm-|bison|gecko)/i.test(id) },
  // Meta (Llama)
  { label: 'Meta', color: '#0668e1', bg: '#080f1a', letter: 'M',
    test: id => /^(llama\d|llama-\d|llama3|llama4|codellama)/i.test(id) },
  // DeepSeek
  { label: 'DeepSeek', color: '#7c3aed', bg: '#10091a', letter: 'D',
    test: id => /^deepseek-/i.test(id) },
  // Mistral
  { label: 'Mistral', color: '#ff7000', bg: '#1a0f00', letter: 'Mi',
    test: id => /^(mistral-|mixtral-|codestral)/i.test(id) },
  // Qwen / Alibaba
  { label: 'Qwen', color: '#6366f1', bg: '#0d0d1a', letter: 'Q',
    test: id => /^(qwen\d|smollm)/i.test(id) },
  // NVIDIA
  { label: 'NVIDIA', color: '#76b900', bg: '#0d1500', letter: 'N',
    test: id => /^nvidia-/i.test(id) },
  // Amazon (Nova)
  { label: 'Amazon', color: '#ff9900', bg: '#1a1300', letter: 'Amz',
    test: id => /^nova-/i.test(id) },
  // xAI (Grok)
  { label: 'xAI', color: '#e2e8f0', bg: '#181818', letter: 'X',
    test: id => /^grok-/i.test(id) },
  // Stability AI
  { label: 'Stability AI', color: '#a855f7', bg: '#120a1a', letter: 'S',
    test: id => /^(stable-diffusion|stable-image)/i.test(id) },
];
const VENDOR_OTHER = { label: 'Other', color: '#6b7280', bg: '#111318', letter: '?' };

const CAPABILITY_GROUPS = [
  { id: 'chat', label: 'Chat', test: id => /^(gpt-|o\d|claude-|gemini-|gemma-|llama|mistral-|mixtral-|codestral|qwen|deepseek-|nova-|grok-|rone-|primus-|cybertron-|nvidia-|smollm)/i.test(id) },
  { id: 'embed', label: 'Embedding', test: id => /(embedding|embed|ada-002|bge-|e5-|jina-embeddings?|voyage)/i.test(id) },
  { id: 'image', label: 'Image', test: id => /(image|imagen|dall-e|stable-diffusion|stable-image|banana)/i.test(id) },
  { id: 'audio', label: 'Audio TTS', test: id => /(tts|text-to-speech|speech)/i.test(id) },
  { id: 'other', label: 'Other', test: () => true }
];
const CAPABILITY_RENDER_ORDER = ['chat', 'embed', 'image', 'audio', 'other'];

function detectVendor(id) {
  for (const r of VENDOR_RULES) if (r.test(id)) return r;
  return VENDOR_OTHER;
}

function detectCapability(id) {
  const specificGroups = CAPABILITY_GROUPS.filter(g => g.id !== 'chat' && g.id !== 'other');
  for (const group of specificGroups) if (group.test(id)) return group;
  return CAPABILITY_GROUPS.find(group => group.id === 'chat' && group.test(id))
      || CAPABILITY_GROUPS.find(group => group.id === 'other');
}

// ── State ─────────────────────────────────────────────────────────────────
let selectedModel = '';
let selectedUsage = 'chat';
let selectedLang  = 'curl';
let allModels     = [];   // array of id strings
const DEFAULT_MODELS = {
  chat: 'gpt-4o',
  embed: 'text-embedding-3-small',
  audio: 'tts-1',
  image: 'dall-e-3'
};

// ── Snippet builders ───────────────────────────────────────────────────────
function normalizeBaseUrl(url) {
  let normalized = (url || DEFAULT_BASE_URL).trim().replace(/\/+$/, '');
  const lower = normalized.toLowerCase();
  for (const path of Object.values(ENDPOINT_PATHS)) {
    const suffix = `/${path}`.toLowerCase();
    if (lower.endsWith(suffix)) {
      normalized = normalized.slice(0, -suffix.length).replace(/\/+$/, '');
      break;
    }
  }
  return normalized || DEFAULT_BASE_URL;
}
function getBaseUrl() {
  const el = document.getElementById('baseUrl');
  return normalizeBaseUrl(el ? el.value : DEFAULT_BASE_URL);
}
function endpointUrl(type) { return `${getBaseUrl()}/${ENDPOINT_PATHS[type]}`; }
function getKey()   { return document.getElementById('apiKey').value.trim() || '{{ your-api-key }}'; }
function getModel() { return selectedModel || '{{ model-id }}'; }
function getUserMsg() {
  const el = document.getElementById('userMessage');
  return el ? el.value.trim() || el.placeholder : 'What is the capital of France?';
}
function getEmbedInput() {
  const el = document.getElementById('embedInput');
  return el ? el.value.trim() || el.placeholder : 'Hello, world!';
}
function getAudioText() {
  const el = document.getElementById('audioText');
  return el ? el.value.trim() || el.placeholder : 'Hello world, this is a text-to-speech test.';
}
function getVoice() {
  const el = document.getElementById('voiceSelect');
  return el ? el.value : 'alloy';
}
function getImagePrompt() {
  const el = document.getElementById('imagePrompt');
  return el ? el.value.trim() || el.placeholder : 'A sunset over misty mountains';
}
function getImageSize() {
  const el = document.getElementById('imageSize');
  return el ? el.value : '1024x1024';
}
function jsonStr(s) { return JSON.stringify(s).slice(1, -1); }

const SNIPPETS = {
  chat: {
    curl: (k, m) =>
`curl --location '${getBaseUrl()}/chat/completions' \\
  --header 'Content-Type: application/json' \\
  --header 'Authorization: Bearer ${k}' \\
  --data '{
    "model": "${m}",
    "max_tokens": 1000,
    "temperature": 0.8,
    "top_p": 1,
    "presence_penalty": 1,
    "messages": [
      {
        "role": "user",
        "content": "${jsonStr(getUserMsg())}"
      }
    ],
    "stream": false
  }'`,
    ps: (k, m) =>
`$headers = @{
    "Content-Type"  = "application/json"
    "Authorization" = "Bearer ${k}"
}

$body = @'
{
    "model": "${m}",
    "max_tokens": 1000,
    "temperature": 0.8,
    "top_p": 1,
    "presence_penalty": 1,
    "messages": [
        { "role": "user", "content": "${jsonStr(getUserMsg())}" }
    ],
    "stream": false
}
'@

$response = Invoke-RestMethod '${getBaseUrl()}/chat/completions' -Method POST -Headers $headers -Body $body
$response | ConvertTo-Json`,
    py: (k, m) =>
`import openai

openai.base_url = "${getBaseUrl()}/"
openai.api_key  = "${k}"  # Do NOT hardcode secrets in production

response = openai.chat.completions.create(
    model="${m}",
    max_tokens=1000,
    messages=[{"role": "user", "content": ${JSON.stringify(getUserMsg())}}],
)

print(response.choices[0].message.content)`,
  },

  embed: {
    curl: (k, m) =>
`curl --location '${getBaseUrl()}/embeddings' \\
  --header 'Content-Type: application/json' \\
  --header 'Authorization: Bearer ${k}' \\
  --data '{
    "model": "${m}",
    "input": ["${jsonStr(getEmbedInput())}"]
}'`,
    ps: (k, m) =>
`$headers = @{
    "Content-Type"  = "application/json"
    "Authorization" = "Bearer ${k}"
}

$body = @'
{
    "model": "${m}",
    "input": ["${jsonStr(getEmbedInput())}"]
}
'@

$response = Invoke-RestMethod '${getBaseUrl()}/embeddings' -Method POST -Headers $headers -Body $body
$response | ConvertTo-Json`,
    py: (k, m) =>
`import openai

openai.base_url = "${getBaseUrl()}/"
openai.api_key  = "${k}"

response = openai.embeddings.create(
    model="${m}",
    input=[${JSON.stringify(getEmbedInput())}],
)

print(response.data[0].embedding[:5])  # first 5 dimensions`,
  },

  audio: {
    curl: (k, m) =>
`curl --location '${getBaseUrl()}/audio/speech' \\
  --header 'Content-Type: application/json' \\
  --header 'Authorization: Bearer ${k}' \\
  --data '{
    "model": "${m}",
    "input": "${jsonStr(getAudioText())}",
    "voice": "${getVoice()}"
}' \\
  --output speech.mp3`,
    ps: (k, m) =>
`$headers = @{
    "Content-Type"  = "application/json"
    "Authorization" = "Bearer ${k}"
}

$body = @'
{
    "model": "${m}",
    "input": "${jsonStr(getAudioText())}",
    "voice": "${getVoice()}"
}
'@

Invoke-RestMethod '${getBaseUrl()}/audio/speech' -Method POST -Headers $headers -Body $body -OutFile speech.mp3`,
    py: (k, m) =>
`import openai
from pathlib import Path

openai.base_url = "${getBaseUrl()}/"
openai.api_key  = "${k}"

response = openai.audio.speech.create(
    model="${m}",
    voice="${getVoice()}",
    input=${JSON.stringify(getAudioText())},
)

Path("speech.mp3").write_bytes(response.content)
print("Saved speech.mp3")`,
  },

  image: {
    curl: (k, m) =>
`curl --location '${getBaseUrl()}/images/generations' \\
  --header 'Content-Type: application/json' \\
  --header 'Authorization: Bearer ${k}' \\
  --data '{
    "model": "${m}",
    "prompt": "${jsonStr(getImagePrompt())}",
    "n": 1,
    "size": "${getImageSize()}"
}'`,
    ps: (k, m) =>
`$headers = @{
    "Content-Type"  = "application/json"
    "Authorization" = "Bearer ${k}"
}

$body = @'
{
    "model": "${m}",
    "prompt": "${jsonStr(getImagePrompt())}",
    "n": 1,
    "size": "${getImageSize()}"
}
'@

$response = Invoke-RestMethod '${getBaseUrl()}/images/generations' -Method POST -Headers $headers -Body $body
$response | ConvertTo-Json`,
    py: (k, m) =>
`import openai

openai.base_url = "${getBaseUrl()}/"
openai.api_key  = "${k}"

response = openai.images.generate(
    model="${m}",
    prompt=${JSON.stringify(getImagePrompt())},
    n=1,
    size="${getImageSize()}",
)

print(response.data[0].url)`,
  },
};

function renderSnippet() {
  const fn = SNIPPETS[selectedUsage]?.[selectedLang];
  document.getElementById('codeSnippet').textContent = fn ? fn(getKey(), getModel()) : '';
}

function updateUsageUi() {
  const labels = {
    chat: 'Chat message',
    embed: 'Embedding text',
    audio: 'Speech text and voice model',
    image: 'Image prompt and size'
  };
  document.querySelectorAll('.usage-panel').forEach(panel => {
    panel.classList.toggle('active', panel.dataset.panel === selectedUsage);
  });
  document.getElementById('inputModeLabel').textContent = labels[selectedUsage] || '';
}

function updateUsageAvailability(capabilityId) {
  const allowed = ['chat', 'embed', 'image', 'audio'].includes(capabilityId) ? capabilityId : '';
  document.querySelectorAll('#usageRow .sel-btn').forEach(btn => {
    btn.disabled = Boolean(allowed) && btn.dataset.usage !== allowed;
    btn.title = btn.disabled ? 'Select a compatible model to use this request type.' : '';
  });
}

function setUsage(id) {
  const btn = document.querySelector(`#usageRow .sel-btn[data-usage="${id}"]`);
  if (btn?.disabled) return;
  selectedUsage = id;
  document.querySelectorAll('#usageRow .sel-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.usage === id);
  });
  updateUsageUi();
}

// ── Usage / Lang selectors ─────────────────────────────────────────────────
function selectUsage(id, btn) {
  setUsage(id);
  renderSnippet();
}
function selectLang(id, btn) {
  selectedLang = id;
  document.querySelectorAll('#langRow .sel-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSnippet();
}

// ── Copy helpers ───────────────────────────────────────────────────────────
function flashCopied(btn, origText) {
  btn.textContent = 'Copied!';
  btn.classList.add('copied');
  setTimeout(() => { btn.textContent = origText; btn.classList.remove('copied'); }, 1500);
}
function copySnippet() {
  const text = document.getElementById('codeSnippet').textContent;
  const btn  = document.getElementById('copySnippetBtn');
  navigator.clipboard.writeText(text).then(() => flashCopied(btn, 'Copy'));
}
function copyModel(id, btn) {
  navigator.clipboard.writeText(id).then(() => flashCopied(btn, 'Copy'));
}

// ── Status ─────────────────────────────────────────────────────────────────
function setStatus(msg, type) {
  const el = document.getElementById('statusMsg');
  if (typeof msg === 'string') { el.textContent = msg; }
  else { el.innerHTML = ''; el.appendChild(msg); }
  el.className = type || '';
}

// ── Fetch models ───────────────────────────────────────────────────────────
async function fetchModels() {
  const key = document.getElementById('apiKey').value.trim();
  if (!key) { setStatus('Please paste your API key first.', 'error'); return; }

  const btn = document.getElementById('fetchBtn');
  btn.disabled = true;
  const spin = document.createElement('span');
  spin.className = 'spinner';
  const msgNode = document.createDocumentFragment();
  msgNode.appendChild(spin);
  msgNode.appendChild(document.createTextNode(' Fetching model list…'));
  setStatus(msgNode, 'info');

  try {
    const res = await fetch(`${getBaseUrl()}/models`, {
      headers: { 'Authorization': `Bearer ${key}` }
    });
    if (res.status === 401 || res.status === 403) {
      setStatus('Authentication failed (401/403). Check your API key.', 'error'); return;
    }
    if (!res.ok) { setStatus(`Server returned ${res.status} ${res.statusText}.`, 'error'); return; }

    const data   = await res.json();
    const models = Array.isArray(data) ? data : Array.isArray(data.data) ? data.data : [];
    if (!models.length) { setStatus('No models returned.', 'error'); return; }

    allModels = models.map(m => m.id || m.name || String(m)).filter(Boolean).sort();
    renderAll();
    setStatus(`Loaded ${allModels.length} model${allModels.length !== 1 ? 's' : ''}.`, 'ok');
  } catch (err) {
    if (err instanceof TypeError) {
      setStatus('Network/CORS error — use the curl snippet in a terminal instead.', 'error');
    } else {
      setStatus(`Error: ${err.message}`, 'error');
    }
  } finally {
    btn.disabled = false;
  }
}

// ── Render everything after models load ───────────────────────────────────
function renderAll() {
  const groups = groupByVendor(allModels);
  renderVendorCards(groups);
  document.getElementById('modelCountLabel').textContent = `— ${allModels.length} total`;
  document.getElementById('modelPlaceholder').style.display = 'none';
  document.getElementById('vendorGrid').style.display = 'grid';
}

function groupByVendor(ids) {
  const map = new Map();
  const order = [...VENDOR_RULES.map(r => r.label), VENDOR_OTHER.label];
  for (const id of ids) {
    const v = detectVendor(id);
    if (!map.has(v.label)) map.set(v.label, { vendor: v, ids: [] });
    map.get(v.label).ids.push(id);
  }
  return [...map.values()].sort((a, b) => order.indexOf(a.vendor.label) - order.indexOf(b.vendor.label));
}

// ── Vendor cards ───────────────────────────────────────────────────────────
function groupByCapability(ids) {
  const map = new Map();
  for (const id of ids) {
    const capability = detectCapability(id);
    if (!map.has(capability.id)) map.set(capability.id, { capability, ids: [] });
    map.get(capability.id).ids.push(id);
  }
  return CAPABILITY_RENDER_ORDER
    .map(id => map.get(id))
    .filter(Boolean);
}

function selectModel(id, capability) {
  document.querySelectorAll('.model-row').forEach(r => {
    r.classList.toggle('selected-row', r.dataset.modelId === id);
  });
  selectedModel = id;
  updateUsageAvailability(capability.id);
  if (['chat', 'embed', 'image', 'audio'].includes(capability.id)) {
    setUsage(capability.id);
  } else {
    setUsage('chat');
  }
  renderSnippet();
}

function createModelRow(id) {
  const capability = detectCapability(id);
  const row = document.createElement('div');
  row.className = 'model-row';
  row.dataset.modelId = id;
  row.dataset.capability = capability.id;
  row.title = id;

  const name = document.createElement('span');
  name.className = 'model-name';
  name.textContent = id;

  const copyBtn = document.createElement('button');
  copyBtn.className = 'copy-model-btn';
  copyBtn.textContent = 'Copy';
  // Copy ALSO selects the model so the example snippet below is filled in.
  copyBtn.onclick = e => {
    e.stopPropagation();
    selectModel(id, capability);
    copyModel(id, copyBtn);
  };

  row.onclick = () => {
    selectModel(id, capability);
    copyModel(id, copyBtn);
  };

  row.appendChild(name);
  row.appendChild(copyBtn);
  return row;
}

function renderVendorCards(groups) {
  const grid = document.getElementById('vendorGrid');
  grid.innerHTML = '';

  for (const { vendor, ids } of groups) {
    const card = document.createElement('div');
    card.className = 'vendor-card';

    const header = document.createElement('div');
    header.className = 'vendor-card-header';
    header.innerHTML = `
      <span class="vendor-icon" style="background:${vendor.bg};color:${vendor.color};border:1px solid ${vendor.color}44">${vendor.letter}</span>
      ${escHtml(vendor.label)}
      <span class="count-badge">${ids.length}</span>`;
    card.appendChild(header);

    const body = document.createElement('div');
    body.className = 'vendor-card-body';

    for (const { capability, ids: capabilityIds } of groupByCapability(ids)) {
      const section = document.createElement('div');
      section.className = 'capability-section';

      const capabilityHeader = document.createElement('div');
      capabilityHeader.className = 'capability-header';
      capabilityHeader.innerHTML = `${escHtml(capability.label)} <span class="count-badge">${capabilityIds.length}</span>`;
      section.appendChild(capabilityHeader);

      for (const id of capabilityIds) section.appendChild(createModelRow(id));
      body.appendChild(section);
    }
    card.appendChild(body);
    grid.appendChild(card);
  }
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ── Try it! ────────────────────────────────────────────────────────────────
async function tryIt() {
  const key = document.getElementById('apiKey').value.trim();
  if (!key) { showResponse('Please paste your API key first.', true); return; }

  const model = selectedModel || DEFAULT_MODELS[selectedUsage] || DEFAULT_MODELS.chat;
  const btn   = document.getElementById('tryBtn');
  btn.disabled = true;
  btn.textContent = '⏳ Sending…';

  showResponse('Waiting for response…', false, 'Waiting for response…');
  document.getElementById('responseMetaLabel').textContent = '';

  const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` };
  const t0 = Date.now();

  try {
    let endpoint, body;

    if (selectedUsage === 'chat') {
      endpoint = `${getBaseUrl()}/chat/completions`;
      body = { model, max_tokens: 256, messages: [{ role: 'user', content: getUserMsg() }], stream: false };
    } else if (selectedUsage === 'embed') {
      endpoint = `${getBaseUrl()}/embeddings`;
      body = { model, input: [getEmbedInput()] };
    } else if (selectedUsage === 'audio') {
      endpoint = `${getBaseUrl()}/audio/speech`;
      body = { model, input: getAudioText(), voice: getVoice() };
    } else if (selectedUsage === 'image') {
      endpoint = `${getBaseUrl()}/images/generations`;
      body = { model, prompt: getImagePrompt(), n: 1, size: getImageSize() };
    }

    const res = await fetch(endpoint, { method: 'POST', headers, body: JSON.stringify(body) });
    const elapsed = ((Date.now() - t0) / 1000).toFixed(2);

    // Audio returns binary — handle separately
    if (selectedUsage === 'audio') {
      if (!res.ok) {
        const txt = await res.text();
        showResponse(`HTTP ${res.status} ${res.statusText}\n\n${txt}`, true);
      } else {
        const blob  = await res.blob();
        const url   = URL.createObjectURL(blob);
        const audioMsg = `Audio received (${(blob.size / 1024).toFixed(1)} KB) with voice "${getVoice()}".`;
        showResponse(audioMsg, false, audioMsg);
        renderAudioPreview(url);
        document.getElementById('responseMetaLabel').textContent = `— ${elapsed}s`;
      }
    } else {
      const data = await res.json();
      const pretty = JSON.stringify(data, null, 2);
      let primaryText;
      if (!res.ok) {
        primaryText = undefined; // show raw error text in primary box
      } else if (selectedUsage === 'chat' && data?.choices?.[0]?.message?.content !== undefined) {
        primaryText = data.choices[0].message.content;
      } else if (selectedUsage === 'embed') {
        primaryText = `Embedding received (${data?.data?.[0]?.embedding?.length ?? '?'} dimensions). See full JSON for values.`;
      } else if (selectedUsage === 'image') {
        primaryText = getImagePreviewUrl(data)
          ? 'Image generated.'
          : 'Image generated. See full JSON for the returned image data.';
      }
      showResponse(pretty, !res.ok, primaryText);
      if (res.ok && selectedUsage === 'image') renderImagePreview(data);
      document.getElementById('responseMetaLabel').textContent = `— HTTP ${res.status} · ${elapsed}s`;
    }
  } catch (err) {
    showResponse(`Network error: ${err.message}`, true);
  } finally {
    btn.disabled = false;
    btn.textContent = '▶ Try it!';
  }
}

function getImagePreviewUrl(data) {
  const item = data?.data?.[0];
  if (!item) return '';
  if (item.url) return item.url;
  if (item.b64_json) return `data:image/png;base64,${item.b64_json}`;
  return '';
}

function resetMediaPreview() {
  const media = document.getElementById('responseMedia');
  media.innerHTML = '';
  media.classList.remove('open');
}

function renderAudioPreview(url) {
  const media = document.getElementById('responseMedia');
  media.innerHTML = '';

  const audio = document.createElement('audio');
  audio.className = 'preview-audio';
  audio.controls = true;
  audio.src = url;

  const actions = document.createElement('div');
  actions.className = 'preview-actions';

  const download = document.createElement('a');
  download.className = 'preview-link';
  download.href = url;
  download.download = 'speech.mp3';
  download.textContent = 'Download audio';
  actions.appendChild(download);

  media.appendChild(audio);
  media.appendChild(actions);
  media.classList.add('open');
}

function renderImagePreview(data) {
  const url = getImagePreviewUrl(data);
  if (!url) return;

  const media = document.getElementById('responseMedia');
  media.innerHTML = '';

  const img = document.createElement('img');
  img.className = 'preview-image';
  img.src = url;
  img.alt = 'Generated image';

  const actions = document.createElement('div');
  actions.className = 'preview-actions';

  const open = document.createElement('a');
  open.className = 'preview-link';
  open.href = url;
  open.target = '_blank';
  open.rel = 'noopener';
  open.textContent = 'Open image';
  actions.appendChild(open);

  media.appendChild(img);
  media.appendChild(actions);
  media.classList.add('open');
}

function showResponse(text, isError, primaryText) {
  const section   = document.getElementById('responseSection');
  const out       = document.getElementById('responseOutput');
  const textBox   = document.getElementById('responseText');
  const rawWrap   = document.getElementById('rawJsonWrap');
  const toggleBtn = document.getElementById('toggleJsonBtn');

  section.style.display = '';
  resetMediaPreview();

  // Primary text display
  textBox.textContent = primaryText !== undefined ? primaryText : text;
  textBox.className   = 'response-text-box' + (isError ? ' resp-error' : '');

  // Raw JSON section
  out.textContent = text;
  out.className   = isError ? 'resp-error' : 'resp-ok';

  // Reset toggle to collapsed on each new response
  rawWrap.classList.remove('open');
  toggleBtn.classList.remove('open');
  toggleBtn.textContent = '\u2630 Show';

  section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function toggleJson() {
  const wrap = document.getElementById('rawJsonWrap');
  const btn  = document.getElementById('toggleJsonBtn');
  const isOpen = wrap.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.textContent = isOpen ? '\u2630 Hide' : '\u2630 Show';
}

function copyResponse() {
  const text = document.getElementById('responseOutput').textContent;
  const btn  = document.getElementById('copyResponseBtn');
  navigator.clipboard.writeText(text).then(() => flashCopied(btn, 'Copy'));
}

// ── Init ───────────────────────────────────────────────────────────────────
document.getElementById('baseUrl').addEventListener('input', renderSnippet);
document.getElementById('baseUrl').addEventListener('keydown', e => {
  if (e.key === 'Enter') { e.preventDefault(); fetchModels(); }
});
document.getElementById('apiKey').addEventListener('input', renderSnippet);
document.getElementById('apiKey').addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); fetchModels(); }
});
['userMessage', 'embedInput', 'audioText', 'imagePrompt'].forEach(id => {
  document.getElementById(id).addEventListener('input', renderSnippet);
});
['voiceSelect', 'imageSize'].forEach(id => {
  document.getElementById(id).addEventListener('change', renderSnippet);
});

updateUsageUi();
renderSnippet();
