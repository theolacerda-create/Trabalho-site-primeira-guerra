
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
    question: "Qual país declarou guerra primeiro após o assassinato do arquiduque?",
    options: ["Alemanha", "Rússia", "Áustria-Hungria", "França"],
    correct: 2,
    hint: "Este país tinha ligação direta com a vítima."
  },
  {
    question: "Qual foi a estratégia inicial da Alemanha para atacar a França?",
    options: ["Plano Schlieffen", "Guerra de trincheiras", "Blitzkrieg", "Operação Barbarossa"],
    correct: 0,
    hint: "O plano envolvia atacar pela Bélgica para cercar a França."
  },
  {
    question: "Qual foi a primeira grande batalha na França em 1914?",
    options: ["Marne", "Somme", "Verdun", "Gallipoli"],
    correct: 0,
    hint: "Impediu o avanço rápido alemão para Paris."
  },
  {
    question: "Qual país invadiu a Bélgica no início da guerra?",
    options: ["Alemanha", "França", "Rússia", "Áustria-Hungria"],
    correct: 0,
    hint: "Foi parte do Plano Schlieffen."
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
    question: "Qual país participou da campanha de Gallipoli?",
    options: ["Austrália e Nova Zelândia", "França e Alemanha", "Rússia e Itália", "Inglaterra e EUA"],
    correct: 0,
    hint: "O Corpo da ANZAC foi famoso nesta campanha."
  },
  {
    question: "Quem era o líder da Alemanha durante a Primeira Guerra Mundial?",
    options: ["Kaiser Guilherme II", "Otto von Bismarck", "Adolf Hitler", "Friedrich Ebert"],
    correct: 0,
    hint: "O imperador que abdicou em 1918."
  },
  {
    question: "Qual tecnologia naval foi decisiva na guerra?",
    options: ["Submarinos U-boat", "Porta-aviões", "Mísseis balísticos", "Tanques anfíbios"],
    correct: 0,
    hint: "Principalmente usados pela Alemanha."
  },
  {
    question: "Qual foi o impacto da guerra na sociedade civil?",
    options: ["Racionamento e escassez", "Crescimento populacional", "Migração em massa", "Desenvolvimento tecnológico sem impactos"],
    correct: 0,
    hint: "Alimentos e suprimentos ficaram escassos."
  },
  {
    question: "Qual foi a revolta interna que afetou o Império Austro-Húngaro?",
    options: ["Revoltas de nacionalidades", "Revolução Francesa", "Guerra Civil Alemã", "Insurreição Italiana"],
    correct: 0,
    hint: "Diversos povos queriam independência."
  },
  {
    question: "Em que ano os Estados Unidos entraram na guerra?",
    options: ["1914", "1915", "1916", "1917"],
    correct: 3,
    hint: "Foi no mesmo ano da Revolução Russa."
  },
  {
    question: "Qual foi o uso controverso na guerra que matou milhares de soldados?",
    options: ["Gás mostarda", "Bombas atômicas", "Cavalaria pesada", "Tanques"],
    correct: 0,
    hint: "Um tipo de arma química."
  },
  {
    question: "Qual país teve grande avanço com tanques em batalha de 1917?",
    options: ["Inglaterra", "Alemanha", "França", "Rússia"],
    correct: 0,
    hint: "O Mark IV foi usado nesta batalha."
  },
  {
    question: "Qual batalha ficou famosa pelo uso de gás mostarda?",
    options: ["Ypres", "Marne", "Somme", "Verdun"],
    correct: 0,
    hint: "Na Bélgica, em 1915."
  },
  {
    question: "Qual foi a primeira revolução na Rússia em 1917?",
    options: ["Fevereiro de 1917", "Outubro de 1917", "Março de 1918", "Novembro de 1918"],
    correct: 0,
    hint: "Primeira revolução do ano de 1917."
  },
  {
    question: "Qual foi a segunda revolução na Rússia em 1917?",
    options: ["Outubro de 1917", "Fevereiro de 1917", "Março de 1918", "Novembro de 1918"],
    correct: 0,
    hint: "Levou os bolcheviques ao poder."
  },
  
  {
    question: "Qual país saiu da guerra após a Revolução de 1917?",
    options: ["Alemanha", "Rússia", "França", "Itália"],
    correct: 1,
    hint: "A revolução levou ao governo comunista."
  },
  {
    question: "Quando ocorreu o armistício que encerrou os combates?",
    options: ["11 de novembro de 1918", "28 de junho de 1919", "1 de janeiro de 1919", "3 de março de 1918"],
    correct: 0,
    hint: "Assinado no 11º dia do 11º mês às 11 horas."
  },
  {
    question: "Qual tratado encerrou a guerra com a Alemanha?",
    options: ["Tratado de Versalhes", "Saint-Germain", "Trianon", "Sèvres"],
    correct: 0,
    hint: "Assinado na França, impôs duras condições à Alemanha."
  },
  {
    question: "Qual país sofreu divisão de território após o Tratado de Saint-Germain?",
    options: ["Áustria", "Alemanha", "Itália", "França"],
    correct: 0,
    hint: "Perdeu várias regiões para novos países."
  },
  {
    question: "Qual foi a consequência política imediata para a Alemanha?",
    options: ["Abdicação do Kaiser", "Ascensão do Hitler", "Revolução Bolchevique", "Unificação com Áustria"],
    correct: 0,
    hint: "Fim da monarquia alemã."
  },
  {
    question: "Qual império foi desmembrado após a guerra?",
    options: ["Império Otomano", "Império Britânico", "Império Russo", "Império Japonês"],
    correct: 0,
    hint: "Ficou na região do Oriente Médio."
  },
  {
    question: "Qual foi a principal organização internacional criada após a guerra?",
    options: ["Liga das Nações", "ONU", "OTAN", "CIS"],
    correct: 0,
    hint: "Tinha como objetivo evitar futuros conflitos."
  },
  {
    question: "Qual foi o impacto das reparações impostas à Alemanha?",
    options: ["Crise econômica e hiperinflação", "Prosperidade econômica", "Avanço industrial", "Expansão territorial"],
    correct: 0,
    hint: "Principalmente na década de 1920."
  },
  {
    question: "Qual país emergiu enfraquecido, mas não totalmente derrotado, após a guerra?",
    options: ["França", "Alemanha", "Rússia", "Itália"],
    correct: 0,
    hint: "Recuperou-se parcialmente com ajuda externa."
  },
  {
    question: "O que foi o Mandato da Liga das Nações?",
    options: [
      "Territórios controlados por países vencedores",
      "Tratado de paz entre Alemanha e França",
      "Programa de reconstrução da Rússia",
      "Conferência econômica internacional"
    ],
    correct: 0,
    hint: "Principalmente sobre ex-colônias do Império Otomano e Alemanha."
  },
  {
    question: "Qual foi a batalha que marcou o fracasso do avanço alemão na França?",
    options: ["Marne", "Somme", "Verdun", "Gallipoli"],
    correct: 0,
    hint: "Aconteceu no início da guerra em território francês."
  },
  {
    question: "Qual país foi pioneiro no uso de tanques na guerra?",
    options: ["Inglaterra", "Alemanha", "França", "Rússia"],
    correct: 0,
    hint: "Primeiros tanques Mark I entraram em combate em 1916."
  },
  {
    question: "Qual foi a consequência econômica mais grave para a Alemanha após a guerra?",
    options: ["Hiperinflação", "Boom econômico", "Industrialização rápida", "Autossuficiência agrícola"],
    correct: 0,
    hint: "Iniciou nos anos 1920 devido às reparações de guerra."
  },
  {
    question: "Qual revolta interna afetou o Império Austro-Húngaro?",
    options: ["Revoltas de nacionalidades", "Revolução Francesa", "Guerra Civil Alemã", "Insurreição Italiana"],
    correct: 0,
    hint: "Diversos povos queriam independência."
  }
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




function loadQuestion() {
    const question = questions[currentQuestionIndex];


    elements.questionText.textContent = question.question;
    elements.questionNumber.textContent = currentQuestionIndex + 1;
    elements.currentQuestion.textContent = currentQuestionIndex + 1;
    elements.totalQuestions.textContent = questions.length;


    const progressPercentage = (currentQuestionIndex / questions.length) * 100;
    elements.progressBar.style.width = `${progressPercentage}%`;
   
    createAnswerOptions(question.options);
    
    
    resetQuestionState();
}

/**
 * Creates answer option buttons
 * @param {Array} options - Array of answer options
 */
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

/**
 * Handles answer selection
 * @param {number} index - Index of selected answer
 */
function selectAnswer(index) {
    if (answered) return;
    
    
    document.querySelectorAll('.answer-option').forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
    });
    
   
    selectedAnswer = index;
    document.querySelectorAll('.answer-option')[index].classList.add('selected');
    
    
    setTimeout(() => {
        revealAnswer(index);
    }, 800);
}

/**
 * Reveals the correct answer and updates score
 * @param {number} selectedIndex - Index of selected answer
 */
function revealAnswer(selectedIndex) {
    answered = true;
    const correctIndex = questions[currentQuestionIndex].correct;
    const buttons = document.querySelectorAll('.answer-option');
    
   
    buttons[correctIndex].classList.add('correct');
    
    
    if (selectedIndex !== correctIndex) {
        buttons[selectedIndex].classList.add('incorrect');
    } else {
        score++;
    }
    
    
    showControlButtons();
}


function showControlButtons() {
    elements.changeBtn.style.display = 'inline-block';
    
    if (currentQuestionIndex < questions.length - 1) {
        elements.nextBtn.style.display = 'inline-block';
    } else {
        elements.finishBtn.style.display = 'inline-block';
    }
}


function changeAnswer() {
    
    document.querySelectorAll('.answer-option').forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
    });
    
    
    resetQuestionState();
}


function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}


function finishQuiz() {
    
    document.querySelector('.question-container').style.display = 'none';
    document.querySelector('.control-buttons').style.display = 'none';
    
   
    elements.resultContainer.style.display = 'block';
    elements.finalScore.textContent = `${score}/${questions.length}`;
    elements.progressBar.style.width = '100%';
    
    
    elements.resultContainer.style.animation = 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
}


function restartQuiz() {
    
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = -1;
    answered = false;
    
    
    document.querySelector('.question-container').style.display = 'block';
    document.querySelector('.control-buttons').style.display = 'flex';
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


window.onload = function() {
    loadQuestion();
    
    
    elements.hintModal.onclick = function(e) {
        if (e.target === e.currentTarget) {
            hideHint();
        }
    };
    
    
    document.addEventListener('keydown', handleKeyPress);
};

/**
 * Handles keyboard navigation
 * @param {KeyboardEvent} e - Keyboard event
 */
function handleKeyPress(e) {
    
    if (e.key === 'Escape' && elements.hintModal.style.display === 'flex') {
        hideHint();
        return;
    }
    
    
    if (answered) return;
    
    
    const keyNum = parseInt(e.key);
    if (keyNum >= 1 && keyNum <= 4) {
        const answerIndex = keyNum - 1;
        if (answerIndex < questions[currentQuestionIndex].options.length) {
            selectAnswer(answerIndex);
        }
    }
}


/**
 * Gets a performance message based on score
 * @param {number} score - User's score
 * @param {number} total - Total questions
 * @returns {string} Performance message
 */
function getPerformanceMessage(score, total) {
    const percentage = (score / total) * 100;
    
    if (percentage === 100) {
        return "Perfeito!";
    } else if (percentage >= 80) {
        return "Excelente trabalho! Você tem um ótimo conhecimento sobre a Primeira Guerra Mundial!";
    } else if (percentage >= 60) {
        return "Bom trabalho!";
    } else if (percentage >= 40) {
        return "Não foi mal! Continue estudando para melhorar ainda mais!";
    } else {
        return "Continue estudando! A História é fascinante quando nos dedicamos a ela!";
    }
}


function updateResultMessage() {
    const resultMessage = document.querySelector('.result-message');
    if (resultMessage) {
        resultMessage.textContent = getPerformanceMessage(score, questions.length);
    }
}


function addAnimations() {
    
    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach((option, index) => {
        option.style.animationDelay = `${index * 0.1}s`;
        option.style.animation = 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both';
    });
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
    
    
    const progressPercentage = (currentQuestionIndex / questions.length) * 100;
    elements.progressBar.style.width = `${progressPercentage}%`;
    
    
    createAnswerOptions(question.options);
    
    
    setTimeout(() => {
        addAnimations();
    }, 200);
    
   
    resetQuestionState();
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


function enhanceAccessibility() {
    
    elements.progressBar.setAttribute('role', 'progressbar');
    elements.progressBar.setAttribute('aria-label', 'Progresso do quiz');
    
    
    const keyboardHint = document.createElement('p');
    keyboardHint.textContent = ' ';
    keyboardHint.style.fontSize = '0.9rem';
    keyboardHint.style.color = 'var(--color-text-muted)';
    keyboardHint.style.textAlign = 'center';
    keyboardHint.style.marginTop = '1rem';
    keyboardHint.style.opacity = '0.7';
    
    const quizHeader = document.querySelector('.quiz-header');
    quizHeader.appendChild(keyboardHint);
}


function initializeQuiz() {
    loadQuestion();
    enhanceAccessibility();
    
    
    document.body.style.transition = 'all 0.3s ease';
    
    console.log(' Quiz da Primeira Guerra Mundial carregado com sucesso!');
    console.log(' Total de perguntas:', questions.length);
}


window.onload = initializeQuiz;