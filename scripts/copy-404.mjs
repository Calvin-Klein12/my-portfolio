// GitHub Pages has no server-side routing. When someone opens a deep link such as
// /my-portfolio/about directly, Pages looks for that file, doesn't find it, and serves 404.html.
// Making 404.html a copy of index.html lets the React app load and show the right page.
import { copyFileSync } from 'node:fs'

copyFileSync('dist/index.html', 'dist/404.html')
console.log('Copied dist/index.html to dist/404.html')
