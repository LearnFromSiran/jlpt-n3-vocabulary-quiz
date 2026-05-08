const state = {
  questions: [],
  currentIndex: 0,
  correct: 0,
  answered: false,
  mistakes: [],
  lastMistakes: [],
  selectedAnswer: "",
  wordPage: 1,
};

const storageKeys = {
  best: "n3ProBest",
  streak: "n3ProStreak",
  lastDate: "n3ProLastDate",
  favorites: "n3ProFavorites",
  mistakes: "n3ProMistakes",
};

const $ = (id) => document.getElementById(id);
const elements = [
  "offlineStatus",
  "totalWords",
  "bestScore",
  "studyStreak",
  "modeLabel",
  "testType",
  "questionCount",
  "focusMode",
  "shuffleBtn",
  "newQuizBtn",
  "quizView",
  "resultsView",
  "panelTitle",
  "panelSubtitle",
  "currentNumber",
  "totalNumber",
  "progressFill",
  "favoriteBtn",
  "kanji",
  "kana",
  "romaji",
  "supportText",
  "options",
  "feedback",
  "revealBtn",
  "nextBtn",
  "correctCount",
  "accuracy",
  "answeredCount",
  "remainingCount",
  "resultScore",
  "resultMessage",
  "mistakesBtn",
  "practiceAgainBtn",
  "reviewList",
  "wordSearch",
  "wordList",
  "wordPageInfo",
  "prevWordPage",
  "nextWordPage",
].reduce((acc, id) => {
  acc[id] = $(id);
  return acc;
}, {});

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function favorites() {
  return readJson(storageKeys.favorites, []);
}

function mistakeIds() {
  return readJson(storageKeys.mistakes, []);
}

function isMockTest() {
  return elements.testType.value === "mock";
}

function activePool() {
  const focus = elements.focusMode.value;
  if (focus === "favorites") {
    return vocabulary.filter((word) => favorites().includes(word.id));
  }
  if (focus === "mistakes") {
    return vocabulary.filter((word) => mistakeIds().includes(word.id));
  }
  return vocabulary;
}

function displayMeaning(word) {
  return word.english;
}

function correctAnswerFor(word) {
  return displayMeaning(word);
}

function promptFor(word) {
  return {
    main: word.kanji,
    kana: "",
    meta: "",
    hint: isMockTest()
      ? "Mock test: answer before moving on."
      : "Choose the correct meaning.",
  };
}

function questionLimit() {
  if (isMockTest())
    return Math.min(50, activePool().length || vocabulary.length);
  return Math.min(
    Number(elements.questionCount.value),
    activePool().length || vocabulary.length,
  );
}

function startQuiz(customQuestions = null) {
  const selectedPool = customQuestions || activePool();
  const source = selectedPool.length ? selectedPool : vocabulary;
  state.questions = shuffle(source).slice(0, questionLimit());
  state.currentIndex = 0;
  state.correct = 0;
  state.answered = false;
  state.mistakes = [];
  state.selectedAnswer = "";
  elements.quizView.classList.remove("hidden");
  elements.resultsView.classList.remove("show");
  renderModeState();
  renderQuestion();
  renderStats();
}

function renderModeState() {
  const mock = isMockTest();
  elements.modeLabel.textContent = mock ? "Mock test" : "Practice";
  elements.questionCount.disabled = mock;
  elements.revealBtn.classList.toggle("hidden", mock);
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];
  state.answered = false;
  state.selectedAnswer = "";

  elements.panelTitle.textContent = isMockTest()
    ? "Mock test question"
    : "Choose the meaning";
  elements.panelSubtitle.textContent = isMockTest()
    ? "Select one answer. Corrections are shown after the test."
    : "Study mode gives instant feedback and answer reveal.";
  elements.currentNumber.textContent = state.currentIndex + 1;
  elements.totalNumber.textContent = state.questions.length;
  elements.progressFill.style.width = `${(state.currentIndex / state.questions.length) * 100}%`;

  const prompt = promptFor(question);
  elements.kanji.textContent = prompt.main;
  elements.kana.textContent = prompt.kana;
  elements.romaji.textContent = prompt.meta;
  elements.kana.classList.toggle("hidden", !prompt.kana);
  elements.romaji.classList.toggle("hidden", !prompt.meta);
  elements.supportText.textContent = prompt.hint;
  elements.feedback.className = "feedback";
  elements.feedback.textContent = "";
  elements.nextBtn.textContent =
    state.currentIndex === state.questions.length - 1 ? "Finish" : "Next";
  renderFavorite(question);

  elements.options.replaceChildren();
  buildOptions(question).forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.textContent = option;
    button.addEventListener("click", () => answerQuestion(option));
    elements.options.append(button);
  });
}

function buildOptions(question) {
  const correct = correctAnswerFor(question);
  const wrongAnswers = shuffle(
    vocabulary.filter((word) => correctAnswerFor(word) !== correct),
  )
    .slice(0, 3)
    .map(correctAnswerFor);
  return shuffle([correct, ...wrongAnswers]);
}

function answerQuestion(selected) {
  if (state.answered) return;

  const question = state.questions[state.currentIndex];
  const correct = correctAnswerFor(question);
  const isCorrect = selected === correct;
  state.answered = true;
  state.selectedAnswer = selected;

  if (isCorrect) {
    state.correct += 1;
  } else {
    recordMistake(question, selected);
  }

  if (isMockTest()) {
    [...elements.options.children].forEach((button) => {
      button.disabled = true;
      if (button.textContent === selected) button.classList.add("selected");
    });
    elements.feedback.className = "feedback show correct";
    elements.feedback.textContent = "Answer saved.";
  } else {
    [...elements.options.children].forEach((button) => {
      button.disabled = true;
      if (button.textContent === correct) button.classList.add("correct");
      if (button.textContent === selected && !isCorrect)
        button.classList.add("incorrect");
    });
    elements.feedback.className = `feedback show ${isCorrect ? "correct" : "incorrect"}`;
    elements.feedback.textContent = isCorrect
      ? `Correct. ${question.kanji} means ${displayMeaning(question)}.`
      : `Answer: ${correct}. ${question.kanji} (${question.kana}) means ${displayMeaning(question)}.`;
  }

  renderStats();
}

function recordMistake(word, selected = "") {
  state.mistakes.push({ ...word, selected });
  const ids = new Set(mistakeIds());
  ids.add(word.id);
  writeJson(storageKeys.mistakes, [...ids].slice(-200));
}

function revealAnswer() {
  if (state.answered || isMockTest()) return;
  const question = state.questions[state.currentIndex];
  const correct = correctAnswerFor(question);
  state.answered = true;
  recordMistake(question, "Revealed");

  [...elements.options.children].forEach((button) => {
    button.disabled = true;
    if (button.textContent === correct) button.classList.add("correct");
  });
  elements.feedback.className = "feedback show incorrect";
  elements.feedback.textContent = `${question.kanji} (${question.kana}) - ${displayMeaning(question)}`;
  renderStats();
}

function nextQuestion() {
  if (!state.answered) {
    elements.feedback.className = "feedback show incorrect";
    elements.feedback.textContent = "Select an answer before continuing.";
    return;
  }

  if (state.currentIndex < state.questions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
    renderStats();
  } else {
    showResults();
  }
}

function renderStats() {
  const answered = state.currentIndex + (state.answered ? 1 : 0);
  const accuracy = answered ? Math.round((state.correct / answered) * 100) : 0;
  elements.correctCount.textContent = state.correct;
  elements.accuracy.textContent = `${accuracy}%`;
  elements.answeredCount.textContent = answered;
  elements.remainingCount.textContent = Math.max(
    state.questions.length - answered,
    0,
  );
}

function showResults() {
  const score = Math.round((state.correct / state.questions.length) * 100);
  const best = Math.max(
    Number(localStorage.getItem(storageKeys.best) || 0),
    score,
  );
  localStorage.setItem(storageKeys.best, best);
  updateStreak();
  state.lastMistakes = [...state.mistakes];
  elements.quizView.classList.add("hidden");
  elements.resultsView.classList.add("show");
  elements.progressFill.style.width = "100%";
  elements.resultScore.textContent = `${score}%`;
  elements.resultMessage.textContent = resultMessage(score);
  elements.mistakesBtn.disabled = state.lastMistakes.length === 0;
  elements.mistakesBtn.textContent =
    state.lastMistakes.length === 0
      ? "No mistakes"
      : `Review ${state.lastMistakes.length} mistakes`;
  renderReview();
  renderSavedProgress();
  renderWordBank();
}

function resultMessage(score) {
  if (isMockTest()) {
    if (score >= 80)
      return "Mock test passed. Review any missed cards, then try another 50-question set.";
    if (score >= 60)
      return "Close. Repeat the mistake set and retake the mock test.";
    return "Focus on 20-question practice first, then return to the mock test.";
  }
  if (score >= 90)
    return "Excellent practice round. Move to mock test when ready.";
  if (score >= 70) return "Good progress. Review the missed cards once.";
  return "Use a shorter set and repeat the mistakes until they feel familiar.";
}

function renderReview() {
  elements.reviewList.replaceChildren();
  const reviewItems = state.lastMistakes.length
    ? state.lastMistakes
    : [
        {
          kanji: "No mistakes",
          kana: "",
          english: "Clean round",
          selected: "",
        },
      ];

  reviewItems.forEach((word) => {
    const row = document.createElement("div");
    row.className = "review-item";
    row.innerHTML = `
      <strong>${word.kanji}${word.kana ? ` (${word.kana})` : ""}</strong>
      <span>${displayMeaning(word)}${word.selected ? ` | Your answer: ${word.selected}` : ""}</span>
    `;
    elements.reviewList.append(row);
  });
}

function toggleFavorite() {
  const question = state.questions[state.currentIndex];
  const set = new Set(favorites());
  set.has(question.id) ? set.delete(question.id) : set.add(question.id);
  writeJson(storageKeys.favorites, [...set]);
  renderFavorite(question);
  renderWordBank();
}

function renderFavorite(word) {
  const saved = favorites().includes(word.id);
  elements.favoriteBtn.classList.toggle("active", saved);
  elements.favoriteBtn.textContent = saved ? "Saved" : "Save";
}

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const last = localStorage.getItem(storageKeys.lastDate);
  let streak = Number(localStorage.getItem(storageKeys.streak) || 0);
  if (last !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    streak = last === yesterday.toISOString().slice(0, 10) ? streak + 1 : 1;
    localStorage.setItem(storageKeys.streak, streak);
    localStorage.setItem(storageKeys.lastDate, today);
  }
}

function renderSavedProgress() {
  elements.totalWords.textContent = vocabulary.length;
  elements.bestScore.textContent = `${Number(localStorage.getItem(storageKeys.best) || 0)}%`;
  elements.studyStreak.textContent = Number(
    localStorage.getItem(storageKeys.streak) || 0,
  );
}

function renderWordBank() {
  const term = elements.wordSearch.value.trim().toLowerCase();
  const savedWords = new Set(favorites());
  const rows = vocabulary.filter((word) =>
    `${word.kanji} ${word.kana} ${word.english}`.toLowerCase().includes(term),
  );
  const pageSize = 12;
  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
  state.wordPage = Math.min(Math.max(state.wordPage, 1), totalPages);
  const pageRows = rows.slice(
    (state.wordPage - 1) * pageSize,
    state.wordPage * pageSize,
  );

  elements.wordList.replaceChildren();
  elements.wordPageInfo.textContent = rows.length
    ? `Page ${state.wordPage} of ${totalPages} · ${rows.length} words`
    : "No words found";
  elements.prevWordPage.disabled = state.wordPage <= 1;
  elements.nextWordPage.disabled = state.wordPage >= totalPages;

  pageRows.forEach((word) => {
    const row = document.createElement("div");
    row.className = "word-row";
    row.innerHTML = `
      <strong>${word.kanji}</strong>
      <span>${word.kana}</span>
      <span>${displayMeaning(word)}</span>
      <button type="button" aria-label="Save ${word.kanji}">${savedWords.has(word.id) ? "Saved" : "Save"}</button>
    `;
    row.querySelector("button").addEventListener("click", () => {
      const set = new Set(favorites());
      set.has(word.id) ? set.delete(word.id) : set.add(word.id);
      writeJson(storageKeys.favorites, [...set]);
      renderWordBank();
      if (state.questions[state.currentIndex])
        renderFavorite(state.questions[state.currentIndex]);
    });
    elements.wordList.append(row);
  });
}

function setupOffline() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
  const updateStatus = () => {
    elements.offlineStatus.textContent = navigator.onLine
      ? "Online - offline ready"
      : "Offline mode";
  };
  window.addEventListener("online", updateStatus);
  window.addEventListener("offline", updateStatus);
  updateStatus();
}

elements.newQuizBtn.addEventListener("click", () => startQuiz());
elements.shuffleBtn.addEventListener("click", () => startQuiz());
elements.practiceAgainBtn.addEventListener("click", () => startQuiz());
elements.mistakesBtn.addEventListener("click", () =>
  startQuiz(state.lastMistakes),
);
elements.revealBtn.addEventListener("click", revealAnswer);
elements.nextBtn.addEventListener("click", nextQuestion);
elements.favoriteBtn.addEventListener("click", toggleFavorite);
elements.testType.addEventListener("change", () => startQuiz());
elements.questionCount.addEventListener("change", () => startQuiz());
elements.focusMode.addEventListener("change", () => startQuiz());
elements.wordSearch.addEventListener("input", () => {
  state.wordPage = 1;
  renderWordBank();
});
elements.prevWordPage.addEventListener("click", () => {
  state.wordPage -= 1;
  renderWordBank();
});
elements.nextWordPage.addEventListener("click", () => {
  state.wordPage += 1;
  renderWordBank();
});

renderSavedProgress();
renderWordBank();
setupOffline();
startQuiz();
