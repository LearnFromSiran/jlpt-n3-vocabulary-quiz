# JLPT N3 Vocabulary Pro

A professional, mobile-friendly JLPT N3 vocabulary quiz that works offline after the first visit. It is built as a static PWA, so it can run on GitHub Pages without a backend or build step.

## Features

- 430 bundled JLPT N3 vocabulary entries
- Offline-first service worker and installable web app manifest
- Mobile-first quiz layout with large tap targets
- Japanese to meaning, meaning to Japanese, and kanji to kana quiz modes
- 10, 20, 30, or 50 question rounds
- Saved best score and daily streak in the browser
- Starred words for personal review
- Mistake review mode saved locally
- Searchable vocabulary bank
- No internet required after the app is cached

## Live Demo

```text
https://learnfromsiran.github.io/jlpt-n3-vocabulary-quiz/
```

## Local Development

Install dependencies:

```bash
npm install
```

Start a local static server:

```bash
npm start
```

Open:

```text
http://localhost:8080
```

## Project Structure

```text
jlpt-n3-vocabulary-quiz/
|-- index.html
|-- styles.css
|-- app.js
|-- vocabulary.js
|-- manifest.webmanifest
|-- sw.js
|-- package.json
|-- README.md
`-- .github/workflows/deploy.yml
```

## Deployment

This repository includes a GitHub Actions workflow for GitHub Pages.

1. Push changes to the `main` branch.
2. In GitHub, open `Settings` > `Pages`.
3. Set the source to `GitHub Actions`.
4. The workflow deploys the static files automatically.

## Vocabulary Notes

The bundled word bank is stored in `vocabulary.js` so the quiz can run offline. The initial N3 word data was adapted from public JLPT study listings and kept local for fast mobile review.

## License

MIT
