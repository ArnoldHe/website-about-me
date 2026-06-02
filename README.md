# Arnold He — Personal Portfolio

A premium, responsive one-page portfolio built with **HTML + Tailwind CSS (CDN) + vanilla JavaScript**.
No build step. No terminal commands. Just edit the files and upload.

## File structure
```
portfolio/
├── index.html              ← all the page content (edit text here)
├── README.md               ← this file
└── assets/
    ├── styles.css          ← theme colors + animations
    ├── script.js           ← dark mode, mobile menu, scroll effects
    ├── profile.jpg         ← your hero photo (replace, keep the name)
    ├── Arnold_He_Resume.pdf  ← the "Download Résumé" file
    └── Arnold_He_Resume.docx ← editable résumé source (optional)
```

## How to edit
- **Text / headlines:** open `index.html`. Every section has a clear `<!-- comment -->` telling you what it is. Search for the word `EDIT`.
- **Your photo:** replace `assets/profile.jpg` with a new image of the same name (square or portrait works best).
- **Résumé download:** replace `assets/Arnold_He_Resume.pdf` with your latest PDF (keep the name), or update the link in the About section.
- **Colors / theme:** open `assets/styles.css`. The `:root` block is the light theme; the `.dark` block is the dark theme. Colors are written as `R G B` channels.
- **Social links:** in `index.html`, search for `EDIT LINK` to update LinkedIn, GitHub, X/Twitter, and email. (GitHub and X currently point to placeholder URLs.)

## Publish on GitHub Pages (free)
1. Create a new GitHub repository (e.g. `arnold-portfolio`).
2. Upload **everything inside this `portfolio` folder** to the repo root — so `index.html` sits at the top level, with the `assets/` folder beside it.
3. Go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Pick branch `main` and folder `/ (root)`, then **Save**.
6. Wait ~1 minute. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.

> Tip: to use a custom domain later, add it under Settings → Pages → Custom domain.

## Contact form
The form currently opens the visitor's email app (mailto). To collect submissions online for free,
create a form at [formspree.io](https://formspree.io) and follow the short instructions in the
comment directly above the `<form>` tag in `index.html`.
