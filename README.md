# JLPT N3 Vocabulary Test

A clean, mobile-friendly JLPT N3 vocabulary practice and mock test app. It is a static offline-ready PWA, so it runs on GitHub Pages with no backend or build step.

## Features

- 430 bundled JLPT N3 vocabulary entries
- Practice mode with instant feedback and reveal answer
- Mock test mode with 50 exam-style questions
- Japanese to meaning, meaning to Japanese, and kanji to kana question types
- Saved words and mistake review stored in the browser
- Best score and daily streak tracking
- Searchable vocabulary bank
- Offline support after the first visit

## Live Demo

```text
https://learnfromsiran.github.io/jlpt-n3-vocabulary-quiz/
```

## Local Development

```bash
npm install
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

Push to `main`. The included GitHub Actions workflow deploys the static app to GitHub Pages.

## License

MIT
