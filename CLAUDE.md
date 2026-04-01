# RDSec AI Endpoint Explorer

A zero-dependency, single-file static web tool for querying TrendMicro's AI
gateway at `api.rdsec.trendmicro.com`. Built for internal RDSec team use,
deployed as a GitHub Pages site.

**API base:** `https://api.rdsec.trendmicro.com/prod/aiendpoint/v1`

## Deployment

1. Push **only** `index.html` to the root of the GitHub Pages branch (main or gh-pages).
2. Settings → Pages → Source: Deploy from branch → main / (root).
3. Do **not** commit API keys, `models.json`, `response.json`, or any captured secrets.
4. Live at: `https://<username>.github.io`

## File Structure

```
trendmicro_api/
├── index.html   — entire application (HTML + CSS + JS, self-contained)
└── CLAUDE.md    — this file
```

## Architecture Overview

The entire application lives in a single `index.html`. There are no build steps,
no bundlers, no external CDN links.

### Page Sections (in DOM order)

| Section | Element ID / selector | Purpose |
|---|---|---|
| Row 1 — API Key | first `section` in `main` | API key textarea; Fetch Models button |
| Row 2 — Model Grid | `#modelSection` | Vendor-grouped model list; hidden until fetch |
| Row 2.5 — User Message | `#userMsgSection` | User message injected into chat snippets and `tryIt()` |
| Row 3 — Example Code | third `section` in `main` | Usage/lang toggles; live code snippet; Try it! button |
| Row 4 — Response | `#responseSection` | Primary text answer + collapsible full JSON |

### State Variables

```javascript
let selectedModel = '';       // Model ID, set when user clicks a model row
let selectedUsage = 'chat';   // 'chat' | 'embed' | 'audio' | 'image'
let selectedLang  = 'curl';   // 'curl' | 'ps' | 'py'
let allModels     = [];       // Flat string[] of model IDs from /models API
```

### Key Functions

| Function | Purpose |
|---|---|
| `getKey()` | Returns trimmed API key value or `{{ your-api-key }}` placeholder |
| `getModel()` | Returns `selectedModel` or `{{ model-id }}` placeholder |
| `getUserMsg()` | Returns trimmed user message value or the textarea placeholder text |
| `jsonStr(s)` | JSON-encodes a string and strips outer quotes — safe for embedding in JSON snippets |
| `renderSnippet()` | Calls `SNIPPETS[selectedUsage][selectedLang](key, model)` and writes to `#codeSnippet` |
| `selectUsage(id, btn)` | Sets `selectedUsage`, updates active button, re-renders snippet |
| `selectLang(id, btn)` | Sets `selectedLang`, updates active button, re-renders snippet |
| `fetchModels()` | GET `/models`, populates `allModels`, calls `renderAll()` |
| `renderAll()` | Groups models by vendor, renders vendor cards, shows the grid |
| `detectVendor(id)` | Regex-matches model ID against `VENDOR_RULES` (order matters) |
| `tryIt()` | POST to the appropriate endpoint using current state; calls `showResponse()` |
| `showResponse(text, isError, primaryText)` | Populates `#responseText` (primary) and `#responseOutput` (full JSON); resets toggle |
| `toggleJson()` | Toggles `#rawJsonWrap` open/closed and updates `#toggleJsonBtn` label |
| `copySnippet()` | Copies `#codeSnippet` text to clipboard |
| `copyResponse()` | Copies `#responseOutput` (full raw JSON) text to clipboard |

### Snippet Builders (`SNIPPETS` object)

Keyed as `SNIPPETS[usage][lang]` where each value is `(k, m) => string`.
- `usage`: `'chat'` | `'embed'` | `'audio'` | `'image'`
- `lang`: `'curl'` | `'ps'` | `'py'`

The chat snippets call `jsonStr(getUserMsg())` to inject the current user message
(or placeholder) into the request body, safely escaping any special characters.

### Vendor Detection (`VENDOR_RULES`)

An ordered array of `{ label, color, bg, letter, test }` objects. `test` is a
regex function over the model ID string. **Order matters** — more specific
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
