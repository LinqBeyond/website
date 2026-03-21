# LynQ BEYOND — marketing site

Static React (Vite) single-page site for **Lynq Beyond LLC**.

## Install Node.js and npm

**npm** ships with **Node.js**. You only install Node once; `npm` and `npx` come with it.

### macOS (pick one)

1. **Installer (simplest)**  
   Download the **LTS** build from [https://nodejs.org](https://nodejs.org), run the installer, then restart the terminal.

2. **Homebrew** (if you use [Homebrew](https://brew.sh))  
   ```bash
   brew install node
   ```

3. **nvm** (multiple Node versions)  
   Follow [nvm setup](https://github.com/nvm-sh/nvm#installing-and-updating), then:
   ```bash
   nvm install --lts
   nvm use --lts
   ```

Check that it worked:

```bash
node -v
npm -v
```

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Deploy on Netlify

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. In [Netlify](https://www.netlify.com/), choose **Add new site → Import an existing project** and connect the repo.
3. Netlify will detect settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. Future pushes to your main branch trigger new builds automatically.

Optional: install the [Netlify CLI](https://docs.netlify.com/cli/get-started/) locally and run `netlify dev` or `netlify deploy` for previews; the `.netlify/` folder is gitignored.

## Brand

Brand reference: `LinqBeyondBrand.pdf` in this repository.
