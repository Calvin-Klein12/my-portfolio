# My Portfolio

Personal portfolio built with React, Tailwind CSS and Vite, hosted on GitHub Pages.

Live: https://calvin-klein12.github.io/my-portfolio/

## Run it locally

Needs Node 20.19 or newer.

```
npm install
npm run dev
```

Open http://localhost:5173/my-portfolio/ (the `/my-portfolio/` part is needed because of the GitHub Pages base path).

## Where to edit

| What | File |
| --- | --- |
| Nav links | `src/data/site.js` (and add a matching `<Route>` in `src/App.jsx`) |
| Home intro text | `src/pages/Home.jsx` |
| About text | `src/pages/About.jsx` |
| Projects | `src/data/projects.js` |
| Colours, font, animations | `src/index.css` |
| Background photo | `src/assets/hero.jpg`, used in `src/components/Layout.jsx` |

## Deploy to GitHub Pages

1. In the repo on GitHub, open Settings > Pages > Build and deployment and set Source to **GitHub Actions**. Do this before you push, or Pages keeps serving the old files from the branch.
2. Push to `main`. `.github/workflows/deploy.yml` builds the site and publishes it.
3. If you rename the repo, change `base` in `vite.config.js`.

After your first `npm install`, commit `package-lock.json` and change `npm install` to `npm ci` in the workflow.

## Credits

Background photo by Adrien Olichon on Unsplash.
