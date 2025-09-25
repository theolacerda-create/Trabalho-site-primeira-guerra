const questions = [
  {
    question: "Qual foi o estopim imediato da Primeira Guerra Mundial?",
    options: [
      "A invasão da Bélgica pela Alemanha",
      "O assassinato do arquiduque Francisco Ferdinando",
      "A corrida armamentista entre Alemanha e Inglaterra",
      "A crise dos Bálcãs"
    ],
    correct: 1,
    hint: "Aconteceu em Sarajevo e envolveu a realeza austro-húngara."
  },
  {
    question: "Qual foi a primeira grande batalha na França em 1914?",
    options: ["Marne", "Somme", "Verdun", "Gallipoli"],
    correct: 0,
    hint: "Impediu o avanço rápido alemão para Paris."
  },
  {
    question: "Qual foi a principal característica da guerra de trincheiras?",
    options: [
      "Movimento rápido de tropas",
      "Guerra estática com pouco avanço territorial",
      "Uso extensivo de cavalaria",
      "Batalhas navais decisivas"
    ],
    correct: 1,
    hint: "Pouco avanço territorial e grandes baixas."
  },
  {
    question: "Qual batalha de 1916 é famosa pelo alto número de baixas?",
    options: ["Verdun", "Somme", "Tannenberg", "Gallipoli"],
    correct: 0,
    hint: "Durou praticamente o ano inteiro na França."
  },
  {
    question: "Quem era o líder da Alemanha durante a Primeira Guerra Mundial?",
    options: ["Kaiser Guilherme II", "Otto von Bismarck", "Adolf Hitler", "Friedrich Ebert"],
    correct: 0,
    hint: "O imperador que abdicou em 1918."
  },
  {
    question: "Qual tecnologia foi decisiva na guerra?",
    options: ["Submarinos U-boat", "Porta-aviões", "Mísseis balísticos", "Tanques anfíbios"],
    correct: 0,
    hint: "Principalmente usados pela Alemanha."
  },
  {
    question: "Em que ano os Estados Unidos entraram na guerra?",
    options: ["1914", "1915", "1916", "1917"],
    correct: 3,
    hint: "Foi no mesmo ano da Revolução Russa."
  },
  {
    question: "Qual batalha ficou famosa pelo uso de gás mostarda?",
    options: ["Ypres", "Marne", "Somme", "Verdun"],
    correct: 0,
    hint: "Na Bélgica, em 1915."
  },
  {
    question: "Qual país saiu da guerra após a Revolução de 1917?",
    options: ["Alemanha", "Rússia", "França", "Itália"],
    correct: 1,
    hint: "A revolução levou ao governo comunista."
  },
  {
    question: "Qual tratado encerrou a guerra com a Alemanha?",
    options: ["Tratado de Versalhes", "Saint-Germain", "Tratado de Trianon", "Sèvres"],
    correct: 0,
    hint: "Assinado na França, impôs duras condições à Alemanha."
  },
  {
    question: "Qual foi a consequência política imediata para a Alemanha?",
    options: ["Abdicação do Kaiser", "Ascensão do Hitler", "Revolução Bolchevique", "Unificação com Áustria"],
    correct: 0,
    hint: "Fim da monarquia alemã."
  },
  {
    question: "Qual foi a principal organização internacional criada após a guerra?",
    options: ["Liga das Nações", "ONU", "OTAN", "CIS"],
    correct: 0,
    hint: "Tinha como objetivo evitar futuros conflitos."
  },
  
];

let currentQuestionIndex = 0;
let selectedAnswer = -1;
let score = 0;
let answered = false;

const elements = {
  questionText: document.getElementById('questionText'),
  questionNumber: document.getElementById('questionNumber'),
  currentQuestion: document.getElementById('currentQuestion'),
  totalQuestions: document.getElementById('totalQuestions'),
  progressBar: document.getElementById('progressBar'),
  answersGrid: document.getElementById('answersGrid'),
  changeBtn: document.getElementById('changeBtn'),
  nextBtn: document.getElementById('nextBtn'),
  finishBtn: document.getElementById('finishBtn'),
  resultContainer: document.getElementById('resultContainer'),
  finalScore: document.getElementById('finalScore'),
  hintModal: document.getElementById('hintModal'),
  hintText: document.getElementById('hintText')
};

function initializeQuiz() {
  loadQuestion();
  elements.hintModal.onclick = function(e) {
    if (e.target === e.currentTarget) hideHint();
  };
  document.addEventListener('keydown', handleKeyPress);
}

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  elements.questionText.style.opacity = '0';
  setTimeout(() => {
    elements.questionText.textContent = question.question;
    elements.questionText.style.opacity = '1';
  }, 150);
  elements.questionNumber.textContent = currentQuestionIndex + 1;
  elements.currentQuestion.textContent = currentQuestionIndex + 1;
  elements.totalQuestions.textContent = questions.length;
  elements.progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
  createAnswerOptions(question.options);
  resetQuestionState();
  addAnimations();
}

function createAnswerOptions(options) {
  elements.answersGrid.innerHTML = '';
  options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'answer-option';
    button.onclick = () => selectAnswer(index);
    button.innerHTML = `<span>${option}</span>`;
    elements.answersGrid.appendChild(button);
  });
}

function selectAnswer(index) {
  if (answered) return;
  document.querySelectorAll('.answer-option').forEach(btn => btn.classList.remove('selected', 'correct', 'incorrect'));
  selectedAnswer = index;
  document.querySelectorAll('.answer-option')[index].classList.add('selected');
  setTimeout(() => revealAnswer(index), 800);
}

function revealAnswer(selectedIndex) {
  answered = true;
  const correctIndex = questions[currentQuestionIndex].correct;
  const buttons = document.querySelectorAll('.answer-option');
  buttons[correctIndex].classList.add('correct');
  if (selectedIndex !== correctIndex) buttons[selectedIndex].classList.add('incorrect');
  else score++;
  showControlButtons();
}

function showControlButtons() {
  elements.changeBtn.style.display = 'inline-block';
  if (currentQuestionIndex < questions.length - 1) elements.nextBtn.style.display = 'inline-block';
  else elements.finishBtn.style.display = 'inline-block';
}

function changeAnswer() {
  document.querySelectorAll('.answer-option').forEach(btn => btn.classList.remove('selected', 'correct', 'incorrect'));
  resetQuestionState();
}

function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
}

function finishQuiz() {
  const questionContainer = document.querySelector('.question-container');
  const controlButtons = document.querySelector('.control-buttons');
  questionContainer.style.transition = 'opacity 0.3s ease';
  controlButtons.style.transition = 'opacity 0.3s ease';
  questionContainer.style.opacity = '0';
  controlButtons.style.opacity = '0';
  setTimeout(() => {
    questionContainer.style.display = 'none';
    controlButtons.style.display = 'none';
    elements.resultContainer.style.display = 'block';
    elements.finalScore.textContent = `${score}/${questions.length}`;
    elements.progressBar.style.width = '100%';
    updateResultMessage();
    elements.resultContainer.style.animation = 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  }, 300);
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = -1;
  answered = false;
  const questionContainer = document.querySelector('.question-container');
  const controlButtons = document.querySelector('.control-buttons');
  questionContainer.style.display = 'block';
  questionContainer.style.opacity = '1';
  controlButtons.style.display = 'flex';
  controlButtons.style.opacity = '1';
  elements.resultContainer.style.display = 'none';
  loadQuestion();
}

function resetQuestionState() {
  answered = false;
  selectedAnswer = -1;
  elements.changeBtn.style.display = 'none';
  elements.nextBtn.style.display = 'none';
  elements.finishBtn.style.display = 'none';
}

function showHint() {
  elements.hintText.textContent = questions[currentQuestionIndex].hint;
  elements.hintModal.style.display = 'flex';
  const hintContent = elements.hintModal.querySelector('.hint-content');
  hintContent.style.animation = 'modalSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
}

function hideHint() {
  elements.hintModal.style.display = 'none';
}

function handleKeyPress(e) {
  if (e.key === 'Escape' && elements.hintModal.style.display === 'flex') {
    hideHint();
    return;
  }
  if (answered) return;
  const keyNum = parseInt(e.key);
  if (keyNum >= 1 && keyNum <= 4) {
    const answerIndex = keyNum - 1;
    if (answerIndex < questions[currentQuestionIndex].options.length) selectAnswer(answerIndex);
  }
}

function getPerformanceMessage(score, total) {
  const percentage = (score / total) * 100;
  if (percentage === 100) return "Perfeito!";
  if (percentage >= 80) return "Excelente trabalho! Você tem um ótimo conhecimento sobre a Primeira Guerra Mundial!";
  if (percentage >= 60) return "Bom trabalho!";
  if (percentage >= 40) return "Não foi mal! Continue estudando para melhorar ainda mais!";
  return "Continue estudando! A História é fascinante quando nos dedicamos a ela!";
}

function updateResultMessage() {
  const resultMessage = document.querySelector('.result-message');
  if (resultMessage) resultMessage.textContent = getPerformanceMessage(score, questions.length);
}

function addAnimations() {
  const answerOptions = document.querySelectorAll('.answer-option');
  answerOptions.forEach((option, index) => {
    option.style.animationDelay = `${index * 0.1}s`;
    option.style.animation = 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both';
  });
}

window.onload = initializeQuiz;
