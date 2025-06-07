const questions = [
    {
        question: "O que geralmente causa enchentes urbanas?",
        answers: ["Terremotos", "Chuva intensa e falta de drenagem", "Vento forte", "Neve"],
        correct: 1,
        explanation: "Chuvas fortes combinadas com sistemas de drenagem insuficientes causam enchentes nas cidades."
    },
    {
        question: "Qual área é mais propensa a enchentes?",
        answers: ["Montanhas", "Desertos", "Áreas ribeirinhas", "Regiões polares"],
        correct: 2,
        explanation: "Áreas próximas a rios estão mais suscetíveis a inundações com aumento do nível da água."
    },
    {
        question: "Como enchentes afetam a saúde pública?",
        answers: ["Aumentam casos de doenças", "Melhoram saneamento", "Diminuem poluição", "Reduzem doenças"],
        correct: 0,
        explanation: "Águas contaminadas por esgoto e lixo aumentam doenças como leptospirose e dengue."
    },
    {
        question: "O que fazer ao receber alerta de enchente?",
        answers: ["Ficar em casa", "Se esconder no porão", "Buscar abrigo seguro", "Nadar"],
        correct: 2,
        explanation: "Abrigos seguros em locais elevados são recomendados durante uma enchente."
    },
    {
        question: "Qual instrumento pode medir o nível de um rio?",
        answers: ["Pluviómetro", "Barômetro", "Régua linimétrica", "Anemômetro"],
        correct: 2,
        explanation: "A régua linimétrica é usada para monitorar o nível da água de rios."
    },
    {
        question: "Qual atitude ajuda a evitar enchentes?",
        answers: ["Queimar lixo", "Jogar lixo nos rios", "Preservar áreas verdes", "Asfaltar tudo"],
        correct: 2,
        explanation: "Áreas verdes ajudam na absorção da água da chuva, reduzindo enchentes."
    },
    {
        question: "O que significa zona de risco?",
        answers: ["Área segura", "Área com enchente frequente", "Zona rural", "Área urbana nobre"],
        correct: 1,
        explanation: "Zonas de risco são locais com maior probabilidade de desastres, como enchentes."
    },
    {
        question: "Enchentes podem causar:",
        answers: ["Falta de energia", "Deslizamentos", "Mortes", "Todas as anteriores"],
        correct: 3,
        explanation: "Enchentes afetam infraestrutura, saúde e segurança, causando diversos danos."
    },
    {
        question: "Qual a função da Defesa Civil?",
        answers: ["Cobrar impostos", "Emitir alertas e proteger vidas", "Construir estradas", "Cuidar da água"],
        correct: 1,
        explanation: "A Defesa Civil atua na prevenção e resposta a desastres naturais, como enchentes."
    },
    {
        question: "Qual é a melhor atitude ao ver água subindo?",
        answers: ["Esperar", "Filmar para redes sociais", "Sair rápido para lugar alto", "Descer para ver melhor"],
        correct: 2,
        explanation: "A evacuação imediata para locais elevados é a forma mais segura de proteção."
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const feedbackEl = document.getElementById("feedback");

function showQuestion() {
    answered = false;
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    feedbackEl.textContent = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.classList.add("answer");
        btn.onclick = () => selectAnswer(index);
        answersEl.appendChild(btn);
    });
}

function selectAnswer(index) {
    if (answered) return;
    answered = true;
    const q = questions[currentQuestion];
    const correct = q.correct;
    const allButtons = answersEl.querySelectorAll("button");

    allButtons.forEach((btn, i) => {
        if (i === correct) {
            btn.classList.add("correct");
        } else if (i === index) {
            btn.classList.add("wrong");
        }
        btn.disabled = true;
    });

    if (index === correct) score++;
    feedbackEl.textContent = q.explanation;

    if (currentQuestion < questions.length - 1) {
        nextBtn.classList.remove("hidden");
    } else {
        nextBtn.textContent = "Ver resultado";
        nextBtn.classList.remove("hidden");
    }
}

function showResult() {
    document.getElementById("question-container").classList.add("hidden");
    nextBtn.classList.add("hidden");
    resultEl.classList.remove("hidden");
    resultEl.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
        nextBtn.classList.add("hidden");
    } else {
        showResult();
    }
});

showQuestion();