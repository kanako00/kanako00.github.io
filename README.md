# Academic Homepage

A single-page academic portfolio prepared for GitHub Pages. The site is written in plain HTML, CSS, and JavaScript and does not require a build step.

## Before publishing

1. Replace every placeholder such as `Your Name`, `[institution]`, and `YOUR-USERNAME` in `index.html`.
2. Create an `assets` directory and place the English CV at `assets/cv.pdf`.
3. Replace the LinkedIn, X, Facebook, and GitHub URLs in the Contact section.
4. Replace example publication links and remove any unused `PDF` or `DOI` links.
5. Update the page title and description in the `<head>` of `index.html`.

## Preview locally

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish with GitHub Pages

Use a repository named `YOUR-USERNAME.github.io`, push these files to its `main` branch, and select **Deploy from a branch → main → /(root)** under **Settings → Pages**.

## Files

- `index.html`: content and page structure
- `styles.css`: visual design and responsive layout
- `script.js`: mobile navigation, active navigation state, and footer year
- `assets/cv.pdf`: CV file to add before publishing
