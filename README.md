# JLPT N3 Vocabulary Quiz App

[![Deploy to GitHub Pages](https://github.com/LearnFromSiran/jlpt-n3-vocabulary-quiz/actions/workflows/deploy.yml/badge.svg)](https://github.com/LearnFromSiran/jlpt-n3-vocabulary-quiz/actions/workflows/deploy.yml)

Interactive JLPT N3 Japanese vocabulary quiz app with Nepali translations. Built with vanilla HTML/CSS/JavaScript for learning Japanese N3-level vocabulary.

## 🌟 Features

- **30 JLPT N3 Vocabulary Words** with Japanese, Romanization, and Nepali translations
- **Interactive Quiz Format** with multiple choice questions
- **Instant Feedback** - Know immediately if your answer is correct
- **Progress Tracking** - See your current score and question number
- **Responsive Design** - Works on desktop and mobile devices
- **No Dependencies** - Pure vanilla JavaScript, no frameworks required

## 🚀 Live Demo

Visit the live app: [https://learnfromsiran.github.io/jlpt-n3-vocabulary-quiz/](https://learnfromsiran.github.io/jlpt-n3-vocabulary-quiz/)

## 📋 Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- (Optional) Node.js and npm for local development server

### Option 1: Direct File Opening

1. **Clone the repository:**
   ```bash
   git clone https://github.com/LearnFromSiran/jlpt-n3-vocabulary-quiz.git
   cd jlpt-n3-vocabulary-quiz
   ```

2. **Open the app:**
   - Simply double-click `index.html` or
   - Right-click `index.html` and select "Open with" your preferred browser

### Option 2: Local Development Server (Recommended)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/LearnFromSiran/jlpt-n3-vocabulary-quiz.git
   cd jlpt-n3-vocabulary-quiz
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   - Navigate to `http://localhost:8080`

## 🌐 Deployment

### GitHub Pages (Automated)

This project is configured for automatic deployment to GitHub Pages:

1. **Fork or clone this repository**

2. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Source: Select "GitHub Actions"
   - The workflow will automatically deploy on every push to `main` branch

3. **Access your deployed app:**
   - Visit: `https://[your-username].github.io/jlpt-n3-vocabulary-quiz/`

### Manual Deployment

You can deploy the app to any static hosting service:

- **Netlify:** Drag and drop the folder
- **Vercel:** Connect your GitHub repository
- **Firebase Hosting:** Use `firebase deploy`
- **Any web server:** Upload all files to your web server

## 📁 Project Structure

```
jlpt-n3-vocabulary-quiz/
├── index.html          # Main HTML file with embedded CSS and JavaScript
├── package.json        # Project configuration and dependencies
├── .gitignore         # Git ignore rules
├── LICENSE            # MIT License
├── README.md          # This file
└── .github/
    └── workflows/
        └── deploy.yml # GitHub Actions workflow for auto-deployment
```

## 🎮 How to Use

1. **Start the Quiz:** Open the app in your browser
2. **Read the Question:** A Nepali word will be displayed
3. **Select Answer:** Click on the Japanese word/phrase you think is correct
4. **Get Feedback:** See immediately if you're right or wrong
5. **Continue:** The quiz will automatically advance to the next question
6. **Complete:** Finish all 30 questions and see your final score
7. **Retry:** Click "फेरि सुरु गर्नुहोस्" to restart the quiz

## 🛠️ Customization

### Adding More Vocabulary

Edit the `vocab` array in `index.html`:

```javascript
const vocab = [
    {
        japanese: "新しい言葉",
        romaji: "atarashii kotoba",
        nepali: "नयाँ शब्द"
    },
    // Add more words...
];
```

### Changing Colors/Styling

Modify the CSS variables in the `<style>` section:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 📝 Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with gradients and animations
- **JavaScript (ES6+)** - Quiz logic and interactivity
- **GitHub Actions** - Automated deployment

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**LearnFromSiran**

- GitHub: [@LearnFromSiran](https://github.com/LearnFromSiran)

## 🙏 Acknowledgments

- JLPT vocabulary lists from official JLPT resources
- Nepali translations curated for Nepali-speaking Japanese learners
- Built to help Nepali community in Japan prepare for JLPT N3

## 📞 Support

If you have any questions or run into issues:

- Open an [Issue](https://github.com/LearnFromSiran/jlpt-n3-vocabulary-quiz/issues)
- Star ⭐ this repository if you find it helpful!

---

**Happy Learning! 日本語の勉強頑張ってください！ शुभकामना! 🎌📚**
