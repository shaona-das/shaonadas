# Your personal site

A four-page site — Home, Experience, Projects, Press & Photos — each its own URL
(`index.html`, `experience.html`, `projects.html`, `press.html`), sharing one sidebar
nav that highlights whichever page you're on. Headlines are set in **Poppins (bold)**,
everything else in **Inter**.

The sidebar itself only lives in one place: `js/script.js` builds it and injects it
into every page based on that page's `data-page` attribute on `<body>`. If you want to
change nav copy or add a page, you only need to edit it in that one spot.

## Preview it locally

You need a local server (opening `index.html` directly works too, but a server avoids
some browser quirks). From this folder, run one of:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Replace the placeholders

There are two kinds of placeholder content to swap in:

1. **Your portrait** — in `index.html`, find the `<div class="placeholder-img portrait">`
   inside the Home section and replace it with:
   ```html
   <img src="assets/your-photo.jpg" alt="Photo of Shaona">
   ```
   Drop your photo into the `assets/` folder first. Aim for a portrait-oriented image
   (roughly 3:4 ratio) for the best crop.

2. **Press & Photos grid** — same pattern. Each `<div class="placeholder-img press-img">`
   in the Press & Photos section becomes:
   ```html
   <img src="assets/press-1.jpg" alt="Describe the photo or clipping">
   ```

You can also swap in real project screenshots if you'd like — just add an `<img>` inside
`.project-card` above the title.

## Content you'll likely want to personalize

- **Copy** in the hero, experience rows, and project descriptions — search for the text
  directly in `index.html`, it's all plain HTML.
- **Links** — the "Live Demo" and "Code" buttons on project cards, and the Home page
  buttons, currently point to `#`. Update the `href` values to your real links.
- **Experience detail** — each row in the Experience section has an `.exp-detail`
  paragraph with expanded copy that shows on click/tap. Edit these to reflect the real story.

## Notes on behavior

- Each section is its own page; the sidebar nav highlights based on which page you're
  currently on (via each page's `data-page` attribute).
- Every page ends with a "Next: ___" link so people can move through in order without
  using the sidebar.
- On screens under 860px wide, the sidebar collapses into a hamburger menu.
- Experience rows expand in place when clicked (accordion).
- Press & Photos filter pills (All / Journalism / Photography) filter the grid live.

## Deploying

Since this is plain HTML/CSS/JS with no build step, you can deploy it almost anywhere for free:

- **GitHub Pages** — push this folder to a repo, enable Pages in repo settings, pointing
  at the root or a `docs/` folder.
- **Netlify / Vercel** — drag-and-drop the folder onto their dashboard, or connect a repo.

No build command or output directory is needed — just point at this folder.
