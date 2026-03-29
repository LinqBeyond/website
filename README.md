# LynQ BEYOND — marketing site

Single-page marketing site for **Lynq Beyond LLC**, built with **React**, **TypeScript**, and **Vite**. It is configured for deployment on **Netlify**.

## Requirements

- **Node.js** (LTS recommended) — includes **npm**.

### macOS (pick one)

1. **Installer (simplest)** — Download the LTS build from [nodejs.org](https://nodejs.org), run the installer, then restart the terminal.
2. **Homebrew** — `brew install node` ([Homebrew](https://brew.sh)).
3. **nvm** — Follow [nvm setup](https://github.com/nvm-sh/nvm#installing-and-updating), then `nvm install --lts` and `nvm use --lts`.

Verify:

```bash
node -v
npm -v
```

## Local development

Install dependencies once:

```bash
npm install
```

Start the Vite dev server (hot reload):

```bash
npm run dev
```

Open the URL shown in the terminal (usually **http://localhost:5173/**). The app must be served by Vite; **do not** open `index.html` directly from the filesystem (`file://`), because the browser cannot load `/src/main.tsx` that way.

**Note:** The contact form submits to **Netlify Forms** via `POST /`. That only works on a **deployed Netlify URL** (or `netlify dev`). While using `npm run dev` alone, use the **Email us** button to reach the inbox, or test the form after a deploy or deploy preview.

## Production build

```bash
npm run build
```

Optimized output is written to **`dist/`**.

Preview the production bundle locally:

```bash
npm run preview
```

Use the URL Vite prints (often **http://localhost:4173/**). Unlike `npm run dev`, **`npm run preview` does not watch files** — run `npm run build` again after changes, then restart preview if needed.

## Deploy on Netlify

1. Connect this repository in the Netlify UI (**Add new site → Import an existing project**).
2. Build settings are read from **`netlify.toml`**:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Deploy. Pushes to the linked branch trigger new builds.

Optional: use the [Netlify CLI](https://docs.netlify.com/cli/get-started/) (`netlify dev`, `netlify deploy --prod`). The `.netlify/` directory is gitignored.

### Contact form (Netlify Forms)

Netlify only registers forms if **automatic form detection** is turned on for the site. In the Netlify UI go to **Forms**, then choose **Enable form detection** (see [Automatic form detection](https://docs.netlify.com/forms/setup/#automatic-form-detection)). After that, **redeploy** so the build output is scanned again.

- A hidden **`contact`** form in **`index.html`** uses the **`netlify`** attribute (same as the docs) plus **`netlify-honeypot="bot-field"`**. That HTML must ship in **`dist/index.html`** after `npm run build` so the deploy parser can see every field **`name`** that React will submit.
- The visible form is in React (`src/components/Contact.tsx`) and posts with `fetch` to `/` as `application/x-www-form-urlencoded`, matching [Submit JavaScript-rendered forms with AJAX](https://docs.netlify.com/forms/setup/#submit-javascript-rendered-forms-with-ajax).
- After a deploy with detection enabled, open **Site configuration → Forms** and confirm the **contact** form is listed.
- Configure **notifications** (e.g. email) so submissions reach the right inbox. Spam filtering can include the built-in honeypot field; add reCAPTCHA in the Netlify UI if you need more protection.

### SPA routing

`netlify.toml` includes a **`/*` → `/index.html`** rewrite (status **200**) so client-side routing keeps working if you add more routes later.

## Project layout (high level)

| Path | Role |
|------|------|
| `index.html` | Shell, fonts, **Netlify form stub** for `contact` |
| `public/` | Static assets served as-is (e.g. `logo.png` at `/logo.png`) |
| `src/` | React app (`App.tsx`, components, styles) |
| `netlify.toml` | Netlify build, publish, and redirects |
| `dist/` | Production build output (generated; not committed) |

## Brand assets

- **Logo (infinity mark):** `logo.png` (repo root) — copy kept in sync under **`public/logo.png`** for the live site.
- **`_brand_extract.png`** — full splash / reference graphic in the repo root (optional for design reference).
