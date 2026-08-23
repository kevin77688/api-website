# AI Endpoint Explorer (v1 Universal Gateway)

A zero-dependency, static web playground for testing and querying OpenAI-compatible v1 AI endpoints (including TrendMicro's AI gateway at `api.rdsec.trendmicro.com`).

**Default Gateway API base:** `https://api.rdsec.trendmicro.com/prod/aiendpoint/v1`

## GitHub Pages Deployment

The site is auto-deployed by `.github/workflows/deploy.yml` on every push to `main` and via manual "Run workflow" trigger from the Actions tab.

The workflow stages these three core static files:
  - `index.html`
  - `styles.css`
  - `app.js`

One-time repo setup:
  Settings → Pages → Build and deployment → Source: GitHub Actions

## Architecture Overview

The application is completely client-side and zero-dependency (vanilla HTML5, CSS3, and modern JavaScript).

### Page Layout & Modality Sections

1. **Row 1 — Connection & Authentication**:
   - Line 1: Gateway Base URL input + **Fetch Live Models** button.
   - Line 2: Bearer API Key input with password visibility toggle.
   - Persistent memory: remembers Base URL and API Key in local cookies and `localStorage`.
   - Auto-sync: automatically fetches live models on load if a key is stored, or immediately when a key is pasted.
   - Global search filter across all models.

2. **Section 1 — Text Completion & Reasoning (Chat)**:
   - Categorized by vendor (max 3 vendor cards per row, starting with TrendMicro, OpenAI, Claude, Google, Meta, DeepSeek, etc.).
   - Model cards sorted chronologically (Newest release first) and by capability tier (Price high to low).
   - Price badges (`FREE`, `$X / $Y per 1M`), context limit pills (`262k`, `1M`), release dates (`YYYY-MM`), and details modal.

3. **Section 2 — Image Generation & Editing**:
   - Diffusion and image generation models.
   - Auto-hidden if no image models are supported by the gateway.

4. **Section 3 — Voice & Audio (TTS / Transcribe)**:
   - Text-to-speech, transcription (Whisper), and realtime audio models.
   - Auto-hidden if no audio models are supported by the gateway.

5. **Section 4 — Vector Embeddings**:
   - Semantic text and multimodal vector embedding models.
   - Auto-hidden if no embedding models are supported by the gateway.

6. **Section 5 (Bottom) — Unified Request Tester & Playground**:
   - Modality tabs (`Text Chat`, `Image Studio`, `Voice & Audio`, `Vector Embedding`).
   - Dynamic inputs per modality:
     - Chat: System prompt, User message, Temperature, Max Tokens, **Stream (SSE) toggle**.
     - Image: Text-to-Image vs **Image Editing/Inpainting** (with reference image upload & thumbnail preview), dimensions selector.
     - Audio: Speech text, Voice persona dropdown (alloy, ash, ballad, coral, echo, fable, nova, onyx, sage, shimmer, verse).
     - Embedding: Text input for vector generation.
   - Live multi-language code snippets: `cURL`, `Python (OpenAI SDK)`, `PowerShell`, `JavaScript (Fetch)`.
   - Universal preview panels:
     - Chat: Real-time SSE token stream typing animation, formatted markdown/text, latency & token usage.
     - Image: Generated/edited image display with zoom lightbox and direct PNG download.
     - Voice: HTML5 soundwave audio player with audio download link.
     - Embedding: Vector dimensions summary, token counts, and float array inspector.

### Clicking Models

Clicking any model row or its Copy button copies the model ID to clipboard and automatically focuses the unified test workbench on that model and modality.
patterns (e.g. TrendMicro internal prefixes `rone-`, `primus-`, `cybertron-`)
come before broad ones (e.g. OpenAI `o1-`). Falls back to `VENDOR_OTHER` if no
rule matches.

## Development Conventions

- **Zero dependencies.** No npm, no CDN links, no import maps.
- **Single file.** All CSS in `<style>` in `<head>`. All JS in `<script>` before `</body>`.
- **CSS variables.** All colors and spacing must use the tokens declared in `:root`:
  `--bg`, `--surface`, `--surface2`, `--border`, `--accent`, `--accent2`,
  `--text`, `--muted`, `--success`, `--error`, `--radius`, `--mono`.
- **IDs:** camelCase (`userMessage`, `responseText`).
- **CSS class names:** kebab-case (`response-text-box`, `btn-toggle-json`).
- **Snippet live-update:** Any input that affects snippet content must call
  `renderSnippet()` via an `input` event listener in the init block at the
  bottom of the script (mirrors the existing `apiKey` listener pattern).
- **Non-chat graceful handling:** Response display must always handle the case
  where `choices[0].message.content` does not exist (embed / audio / image usage
  types never have it). Use `primaryText` parameter to `showResponse()` for this.
- **Deployment comment:** The HTML comment block at the bottom of the file
  (GitHub Pages instructions) must be preserved on every edit.
- **Copy in Row 4** always copies the full raw JSON (`#responseOutput`), not the
  primary text summary.
