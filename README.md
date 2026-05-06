# JLPT N3 Vocabulary Quiz

A responsive JLPT N3 vocabulary practice app for Nepali-speaking Japanese learners. The app is a static HTML/CSS/JavaScript project, so it is easy to host on GitHub Pages, Netlify, Vercel, Firebase Hosting, or any static web server.

## Features

- 30 curated JLPT N3 vocabulary words
- Kanji, kana, romaji, English meaning, and Nepali translation support
- 10, 15, or 30 question practice rounds
- Two quiz directions: Japanese to Nepali and Nepali to Japanese
- Shuffled multiple-choice answers with instant feedback
- Reveal-answer option for study mode
- Mistakes-only practice after each round
- Searchable vocabulary bank
- Session progress, accuracy, and remaining question counters
- Saved best score and daily study streak in the browser
- Canva-style responsive interface with animations

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

You can also open `index.html` directly in a browser because the app has no build step.

## Deployment

This repository includes a GitHub Actions workflow for GitHub Pages.

1. Push changes to the `main` branch.
2. In GitHub, open repository `Settings` > `Pages`.
3. Set the source to `GitHub Actions`.
4. The workflow deploys the static files automatically.

For other hosts, upload the repository files or connect the repository as a static site. No build command is required.

## Project Structure

```text
jlpt-n3-vocabulary-quiz/
├── index.html
├── package.json
├── README.md
├── LICENSE
└── .github/
    └── workflows/
        └── deploy.yml
```

## Customizing Vocabulary

Vocabulary lives in the `vocabulary` array inside `index.html`. Each item uses this shape:

```javascript
{
  kanji: "確認",
  kana: "かくにん",
  romaji: "kakunin",
  english: "confirmation, check",
  nepali: "पुष्टि गर्नु"
}
```

Add more items to increase the question bank. The quiz automatically creates answer choices from the full vocabulary list.

## License

MIT
