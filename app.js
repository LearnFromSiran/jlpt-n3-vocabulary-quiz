const state = {
  questions: [],
  currentIndex: 0,
  correct: 0,
  answered: false,
  mistakes: [],
  lastMistakes: [],
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
  "quizMode",
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
  "wordCard",
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
].reduce((a, id) => ((a[id] = $(id)), a), {});
function readJson(k, f) {
  try {
    return JSON.parse(localStorage.getItem(k)) || f;
  } catch {
    return f;
  }
}
function writeJson(k, v) {
  localStorage.setItem(k, JSON.stringify(v));
}
function shuffle(items) {
  const c = [...items];
  for (let i = c.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [c[i], c[j]] = [c[j], c[i]];
  }
  return c;
}
function favorites() {
  return readJson(storageKeys.favorites, []);
}
function mistakeIds() {
  return readJson(storageKeys.mistakes, []);
}
function pool() {
  const f = elements.focusMode.value;
  if (f === "favorites")
    return vocabulary.filter((w) => favorites().includes(w.id));
  if (f === "mistakes")
    return vocabulary.filter((w) => mistakeIds().includes(w.id));
  return vocabulary;
}
function displayMeaning(w) {
  return (w.nepali ? w.nepali + " - " : "") + w.english;
}
function answerFor(w) {
  const m = elements.quizMode.value;
  if (m === "meaning") return displayMeaning(w);
  if (m === "kana") return w.kana;
  return w.kanji;
}
function promptFor(w) {
  const m = elements.quizMode.value;
  if (m === "meaning" || m === "kana")
    return {
      main: w.kanji,
      kana: w.kana,
      meta: w.kana,
      hint: m === "kana" ? w.english : "Reading: " + w.kana,
    };
  return {
    main: displayMeaning(w),
    kana: w.english,
    meta: "Choose the Japanese word",
    hint: "Reading appears after answer",
  };
}
function startQuiz(custom) {
  const selected = custom || pool();
  const source = selected.length ? selected : vocabulary;
  const limit = Math.min(Number(elements.questionCount.value), source.length);
  state.questions = shuffle(source).slice(0, limit);
  state.currentIndex = 0;
  state.correct = 0;
  state.answered = false;
  state.mistakes = [];
  elements.quizView.classList.remove("hidden");
  elements.resultsView.classList.remove("show");
  renderQuestion();
  renderStats();
}
function renderQuestion() {
  const q = state.questions[state.currentIndex];
  state.answered = false;
  const m = elements.quizMode.value;
  elements.panelTitle.textContent =
    m === "meaning"
      ? "Choose the meaning"
      : m === "kana"
        ? "Choose the reading"
        : "Choose the Japanese word";
  elements.panelSubtitle.textContent =
    m === "meaning"
      ? "Read the Japanese and pick the best meaning."
      : m === "kana"
        ? "Match the kanji to its kana reading."
        : "Read the meaning and pick the Japanese word.";
  elements.currentNumber.textContent = state.currentIndex + 1;
  elements.totalNumber.textContent = state.questions.length;
  elements.progressFill.style.width =
    (state.currentIndex / state.questions.length) * 100 + "%";
  const p = promptFor(q);
  elements.kanji.textContent = p.main;
  elements.kana.textContent = p.kana;
  elements.romaji.textContent = p.meta;
  elements.supportText.textContent = p.hint;
  elements.feedback.className = "feedback";
  elements.feedback.textContent = "";
  elements.nextBtn.textContent =
    state.currentIndex === state.questions.length - 1 ? "Finish" : "Next";
  renderFavorite(q);
  elements.options.replaceChildren();
  buildOptions(q).forEach((option) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "option";
    b.textContent = option;
    b.addEventListener("click", () => answerQuestion(option));
    elements.options.append(b);
  });
}
function buildOptions(q) {
  const correct = answerFor(q);
  const wrong = shuffle(vocabulary.filter((w) => answerFor(w) !== correct))
    .slice(0, 3)
    .map(answerFor);
  return shuffle([correct, ...wrong]);
}
function answerQuestion(selected) {
  if (state.answered) return;
  const q = state.questions[state.currentIndex];
  const correct = answerFor(q);
  const ok = selected === correct;
  state.answered = true;
  if (ok) state.correct++;
  else recordMistake(q);
  [...elements.options.children].forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.classList.add("correct");
    if (btn.textContent === selected && !ok) btn.classList.add("incorrect");
  });
  elements.feedback.className =
    "feedback show " + (ok ? "correct" : "incorrect");
  elements.feedback.textContent = ok
    ? "Correct. " + q.kanji + " means " + displayMeaning(q) + "."
    : "Answer: " +
      correct +
      ". " +
      q.kanji +
      " (" +
      q.kana +
      ") means " +
      displayMeaning(q) +
      ".";
  renderStats();
}
function recordMistake(w) {
  state.mistakes.push(w);
  const ids = new Set(mistakeIds());
  ids.add(w.id);
  writeJson(storageKeys.mistakes, [...ids].slice(-200));
}
function revealAnswer() {
  if (state.answered) return;
  const q = state.questions[state.currentIndex];
  state.answered = true;
  recordMistake(q);
  const correct = answerFor(q);
  [...elements.options.children].forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.classList.add("correct");
  });
  elements.feedback.className = "feedback show incorrect";
  elements.feedback.textContent =
    q.kanji + " (" + q.kana + ") - " + displayMeaning(q);
  renderStats();
}
function nextQuestion() {
  if (!state.answered) {
    elements.feedback.className = "feedback show incorrect";
    elements.feedback.textContent = "Choose an answer or reveal it first.";
    return;
  }
  if (state.currentIndex < state.questions.length - 1) {
    state.currentIndex++;
    renderQuestion();
    renderStats();
  } else showResults();
}
function renderStats() {
  const answered = state.currentIndex + (state.answered ? 1 : 0);
  const accuracy = answered ? Math.round((state.correct / answered) * 100) : 0;
  elements.correctCount.textContent = state.correct;
  elements.accuracy.textContent = accuracy + "%";
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
  elements.resultScore.textContent = score + "%";
  elements.resultMessage.textContent =
    score >= 90
      ? "Excellent. Move to a larger set or reverse mode."
      : score >= 70
        ? "Good round. Review missed cards once before a new set."
        : "Use a 10-question round and repeat your mistake list.";
  elements.mistakesBtn.disabled = !state.lastMistakes.length;
  elements.mistakesBtn.textContent = state.lastMistakes.length
    ? "Practice " + state.lastMistakes.length + " mistakes"
    : "No mistakes";
  renderReview();
  renderSavedProgress();
  renderWordBank();
}
function renderReview() {
  elements.reviewList.replaceChildren();
  (state.lastMistakes.length
    ? state.lastMistakes
    : [
        {
          kanji: "No mistakes",
          kana: "",
          english: "Clean round",
          nepali: "Great work",
        },
      ]
  ).forEach((w) => {
    const row = document.createElement("div");
    row.className = "review-item";
    row.innerHTML =
      "<strong>" +
      w.kanji +
      (w.kana ? " (" + w.kana + ")" : "") +
      "</strong><span>" +
      displayMeaning(w) +
      "</span>";
    elements.reviewList.append(row);
  });
}
function toggleFavorite() {
  const q = state.questions[state.currentIndex];
  const set = new Set(favorites());
  set.has(q.id) ? set.delete(q.id) : set.add(q.id);
  writeJson(storageKeys.favorites, [...set]);
  renderFavorite(q);
  renderWordBank();
}
function renderFavorite(w) {
  const saved = favorites().includes(w.id);
  elements.favoriteBtn.classList.toggle("active", saved);
  elements.favoriteBtn.textContent = saved ? "Saved" : "Save";
}
function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  const last = localStorage.getItem(storageKeys.lastDate);
  let streak = Number(localStorage.getItem(storageKeys.streak) || 0);
  if (last !== today) {
    const y = new Date();
    y.setDate(y.getDate() - 1);
    streak = last === y.toISOString().slice(0, 10) ? streak + 1 : 1;
    localStorage.setItem(storageKeys.streak, streak);
    localStorage.setItem(storageKeys.lastDate, today);
  }
}
function renderSavedProgress() {
  elements.totalWords.textContent = vocabulary.length;
  elements.bestScore.textContent =
    Number(localStorage.getItem(storageKeys.best) || 0) + "%";
  elements.studyStreak.textContent = Number(
    localStorage.getItem(storageKeys.streak) || 0,
  );
}
function renderWordBank() {
  const term = elements.wordSearch.value.trim().toLowerCase();
  const favs = new Set(favorites());
  const rows = vocabulary
    .filter((w) =>
      (w.kanji + " " + w.kana + " " + w.english + " " + w.nepali)
        .toLowerCase()
        .includes(term),
    )
    .slice(0, 260);
  elements.wordList.replaceChildren();
  rows.forEach((w) => {
    const row = document.createElement("div");
    row.className = "word-row";
    row.innerHTML =
      "<strong>" +
      w.kanji +
      "</strong><span>" +
      w.kana +
      "</span><span>" +
      displayMeaning(w) +
      '</span><button class="secondary" type="button" aria-label="Save ' +
      w.kanji +
      '">' +
      (favs.has(w.id) ? "Saved" : "Save") +
      "</button>";
    row.querySelector("button").addEventListener("click", () => {
      const set = new Set(favorites());
      set.has(w.id) ? set.delete(w.id) : set.add(w.id);
      writeJson(storageKeys.favorites, [...set]);
      renderWordBank();
      if (state.questions[state.currentIndex])
        renderFavorite(state.questions[state.currentIndex]);
    });
    elements.wordList.append(row);
  });
}
function setupOffline() {
  if ("serviceWorker" in navigator)
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  const set = () => {
    elements.offlineStatus.textContent = navigator.onLine
      ? "Online - offline ready"
      : "Offline mode";
  };
  window.addEventListener("online", set);
  window.addEventListener("offline", set);
  set();
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
elements.quizMode.addEventListener("change", () => startQuiz());
elements.questionCount.addEventListener("change", () => startQuiz());
elements.focusMode.addEventListener("change", () => startQuiz());
elements.wordSearch.addEventListener("input", renderWordBank);
renderSavedProgress();
renderWordBank();
setupOffline();
startQuiz();
