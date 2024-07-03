const questions = [
    {
        question: "Нравится ли вам решать технические задачи?",
        answers: [
            { text: "Да", weights: { Инженер: 2, Художник: 0, Социальный: 0, Гуманитарный: 0, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 0, Художник: 0, Социальный: 1, Гуманитарный: 1, Экономический: 1 } }
        ]
    },
    {
        question: "Интересуетесь ли вы искусством?",
        answers: [
            { text: "Да", weights: { Инженер: 0, Художник: 2, Социальный: 0, Гуманитарный: 1, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 1, Художник: 0, Социальный: 0, Гуманитарный: 0, Экономический: 1 } }
        ]
    },
    {
        question: "Любите ли вы помогать людям?",
        answers: [
            { text: "Да", weights: { Инженер: 0, Художник: 0, Социальный: 2, Гуманитарный: 1, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 1, Художник: 0, Социальный: 0, Гуманитарный: 0, Экономический: 1 } }
        ]
    },
    {
        question: "Нравится ли вам изучать историю и литературу?",
        answers: [
            { text: "Да", weights: { Инженер: 0, Художник: 1, Социальный: 1, Гуманитарный: 2, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 1, Художник: 0, Социальный: 0, Гуманитарный: 0, Экономический: 1 } }
        ]
    },
    {
        question: "Интересуетесь ли вы экономикой и финансами?",
        answers: [
            { text: "Да", weights: { Инженер: 0, Художник: 0, Социальный: 0, Гуманитарный: 0, Экономический: 2 } },
            { text: "Нет", weights: { Инженер: 1, Художник: 0, Социальный: 1, Гуманитарный: 1, Экономический: 0 } }
        ]
    },
    {
        question: "Любите ли вы работать с инструментами и механизмами?",
        answers: [
            { text: "Да", weights: { Инженер: 2, Художник: 0, Социальный: 0, Гуманитарный: 0, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 0, Художник: 0, Социальный: 1, Гуманитарный: 1, Экономический: 1 } }
        ]
    },
    {
        question: "Интересуетесь ли вы психологией и поведением людей?",
        answers: [
            { text: "Да", weights: { Инженер: 0, Художник: 0, Социальный: 2, Гуманитарный: 2, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 1, Художник: 0, Социальный: 0, Гуманитарный: 0, Экономический: 1 } }
        ]
    },
    {
        question: "Любите ли вы решать математические задачи?",
        answers: [
            { text: "Да", weights: { Инженер: 2, Художник: 0, Социальный: 0, Гуманитарный: 0, Экономический: 1 } },
            { text: "Нет", weights: { Инженер: 0, Художник: 1, Социальный: 1, Гуманитарный: 1, Экономический: 0 } }
        ]
    },
    {
        question: "Интересуетесь ли вы спортивными мероприятиями?",
        answers: [
            { text: "Да", weights: { Инженер: 0, Художник: 0, Социальный: 2, Гуманитарный: 0, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 1, Художник: 0, Социальный: 0, Гуманитарный: 1, Экономический: 1 } }
        ]
    },
    {
        question: "Нравится ли вам создавать что-то новое, например, изобретать или разрабатывать?",
        answers: [
            { text: "Да", weights: { Инженер: 2, Художник: 1, Социальный: 0, Гуманитарный: 0, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 0, Художник: 0, Социальный: 1, Гуманитарный: 1, Экономический: 1 } }
        ]
    },
    {
        question: "Любите ли вы планировать и организовывать мероприятия?",
        answers: [
            { text: "Да", weights: { Инженер: 0, Художник: 0, Социальный: 1, Гуманитарный: 1, Экономический: 2 } },
            { text: "Нет", weights: { Инженер: 1, Художник: 1, Социальный: 0, Гуманитарный: 0, Экономический: 0 } }
        ]
    },
    {
        question: "Интересуетесь ли вы техническим прогрессом и новыми технологиями?",
        answers: [
            { text: "Да", weights: { Инженер: 2, Художник: 1, Социальный: 0, Гуманитарный: 0, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 0, Художник: 0, Социальный: 1, Гуманитарный: 1, Экономический: 1 } }
        ]
    },
    {
        question: "Нравится ли вам писать статьи, эссе или рассказы?",
        answers: [
            { text: "Да", weights: { Инженер: 0, Художник: 2, Социальный: 0, Гуманитарный: 2, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 1, Художник: 0, Социальный: 1, Гуманитарный: 0, Экономический: 1 } }
        ]
    },
    {
        question: "Интересуетесь ли вы экологией и охраной окружающей среды?",
        answers: [
            { text: "Да", weights: { Инженер: 0, Художник: 1, Социальный: 1, Гуманитарный: 1, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 1, Художник: 0, Социальный: 0, Гуманитарный: 0, Экономический: 1 } }
        ]
    },
    {
        question: "Любите ли вы анализировать данные и статистику?",
        answers: [
            { text: "Да", weights: { Инженер: 1, Художник: 0, Социальный: 0, Гуманитарный: 0, Экономический: 1 } },
            { text: "Нет", weights: { Инженер: 0, Художник: 1, Социальный: 1, Гуманитарный: 1, Экономический: 0 } }
        ]
    },
    {
        question: "Интересуетесь ли вы политикой и общественной жизнью?",
        answers: [
            { text: "Да", weights: { Инженер: 0, Художник: 0, Социальный: 2, Гуманитарный: 1, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 1, Художник: 1, Социальный: 0, Гуманитарный: 0, Экономический: 1 } }
        ]
    },
    {
        question: "Любите ли вы изучать иностранные языки и культуры?",
        answers: [
            { text: "Да", weights: { Инженер: 0, Художник: 1, Социальный: 1, Гуманитарный: 2, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 1, Художник: 0, Социальный: 0, Гуманитарный: 1, Экономический: 1 } }
        ]
    },
    {
        question: "Вы предпочитаете работать с числами и логическими задачами?",
        answers: [
            { text: "Да", weights: { Инженер: 2, Художник: 0, Социальный: 0, Гуманитарный: 0, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 0, Художник: 1, Социальный: 1, Гуманитарный: 1, Экономический: 1 } }
        ]
    },
    {
        question: "Любите ли вы анализировать информацию и находить решения?",
        answers: [
            { text: "Да", weights: { Инженер: 1, Художник: 0, Социальный: 0, Гуманитарный: 0, Экономический: 1 } },
            { text: "Нет", weights: { Инженер: 0, Художник: 1, Социальный: 1, Гуманитарный: 1, Экономический: 0 } }
        ]
    },
    {
        question: "Любите ли вы общаться с людьми и решать коллективные задачи?",
        answers: [
            { text: "Да", weights: { Инженер: 0, Художник: 0, Социальный: 2, Гуманитарный: 1, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 1, Художник: 1, Социальный: 0, Гуманитарный: 0, Экономический: 1 } }
        ]
    },
    {
        question: "Любите ли вы обсуждать философские вопросы и идеи?",
        answers: [
            { text: "Да", weights: { Инженер: 0, Художник: 1, Социальный: 1, Гуманитарный: 2, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 1, Художник: 0, Социальный: 0, Гуманитарный: 1, Экономический: 1 } }
        ]
    },
    {
        question: "Интересуетесь ли вы архитектурой и дизайном?",
        answers: [
            { text: "Да", weights: { Инженер: 1, Художник: 2, Социальный: 0, Гуманитарный: 1, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 0, Художник: 0, Социальный: 1, Гуманитарный: 0, Экономический: 1 } }
        ]
    },
    {
        question: "Нравится ли вам создавать иллюстрации, фотографии или другие визуальные произведения?",
        answers: [
            { text: "Да", weights: { Инженер: 0, Художник: 2, Социальный: 0, Гуманитарный: 1, Экономический: 0 } },
            { text: "Нет", weights: { Инженер: 1, Художник: 0, Социальный: 1, Гуманитарный: 0, Экономический: 1 } }
        ]
    },
];


let currentQuestionIndex = 0;
const results = { Инженер: 0, Художник: 0, Социальный: 0, Гуманитарный: 0, Экономический: 0 };
let chart; // Переменная для хранения экземпляра диаграммы

document.addEventListener("DOMContentLoaded", function() {
    renderQuestionList();
    showQuestion(currentQuestionIndex);
});

function renderQuestionList() {
    const questionList = document.getElementById("question-list");
    questionList.innerHTML = ""; // Clear previous question list
    questions.forEach((question, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Вопрос ${index + 1}`;
        listItem.onclick = () => {
            showQuestion(index);
        };
        if (questions[index].selectedAnswer) {
            listItem.classList.add("answered"); // Отмечаем вопросы, на которые дан ответ
        }
        questionList.appendChild(listItem);
    });
    // Добавляем элемент для результатов
    const resultItem = document.createElement("li");
    resultItem.textContent = "Результат";
    resultItem.id = "result-item";
    resultItem.onclick = () => {
        calculateResults();
    };
    if (Object.keys(results).some(profession => results[profession] > 0)) {
        questionList.appendChild(resultItem); // Добавляем результаты, если они есть
    }
}

function showQuestion(index) {
    const questionContainer = document.getElementById("question-container");
    const answerContainer = document.getElementById("answer-container");
    const resultContainer = document.getElementById("result-container");
    const navigationButtons = document.getElementById("navigation-buttons");

    questionContainer.style.display = "block";
    answerContainer.style.display = "block";
    resultContainer.style.display = "none";
    navigationButtons.style.display = "flex";

    questionContainer.textContent = questions[index].question;
    answerContainer.innerHTML = ""; // Clear previous answers

    questions[index].answers.forEach(answer => {
        const answerButton = document.createElement("button");
        answerButton.textContent = answer.text;
        answerButton.className = questions[index].selectedAnswer === answer ? "selected" : "";
        answerButton.onclick = () => {
            selectAnswer(index, answer);
        };
        answerContainer.appendChild(answerButton);
    });

    currentQuestionIndex = index;
    updateQuestionList();
    updateButtons();
}

function selectAnswer(questionIndex, answer) {
    questions[questionIndex].selectedAnswer = answer;
    showQuestion(questionIndex); // Re-render the question to update the selected answer highlight
}

function updateQuestionList() {
    const listItems = document.querySelectorAll("#question-list li");
    listItems.forEach((item, index) => {
        item.classList.remove("active");
        if (index === currentQuestionIndex) {
            item.classList.add("active");
        }
        if (questions[index].selectedAnswer) {
            item.classList.add("answered"); // Отмечаем вопросы, на которые дан ответ
        } else {
            item.classList.remove("answered");
        }
    });
}

function updateButtons() {
    const nextButton = document.getElementById("next-button");
    const resultButton = document.getElementById("result-button");

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.style.display = "none";
        resultButton.style.display = "inline-block";
    } else {
        nextButton.style.display = "inline-block";
        resultButton.style.display = "none";
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

function calculateResults() {
    let allAnswered = true;
    questions.forEach(q => {
        if (!q.selectedAnswer) {
            allAnswered = false;
        }
    });

    if (!allAnswered) {
        showMessage("Необходимо ответить на все вопросы.");
        return;
    }

    questions.forEach(q => {
        if (q.selectedAnswer) {
            for (const profession in q.selectedAnswer.weights) {
                results[profession] += q.selectedAnswer.weights[profession];
            }
        }
    });

    showResults();
}

function showResults() {
    const resultContainer = document.getElementById("result-container");
    const questionContainer = document.getElementById("question-container");
    const answerContainer = document.getElementById("answer-container");
    const navigationButtons = document.getElementById("navigation-buttons");

    questionContainer.style.display = "none";
    answerContainer.style.display = "none";
    resultContainer.style.display = "flex";
    navigationButtons.style.display = "none";

    const resultList = document.getElementById("result-list");
    resultList.innerHTML = ""; // Clear previous results

    const totalPoints = Object.values(results).reduce((acc, val) => acc + val, 0);

    for (const profession in results) {
        const percent = ((results[profession] / totalPoints) * 100).toFixed(2);
        const resultItem = document.createElement("div");
        resultItem.textContent = `${profession}: ${percent}%`;
        resultList.appendChild(resultItem);
    }

    createChart();
}

function createChart() {
    const ctx = document.getElementById('result-chart').getContext('2d');
    const labels = Object.keys(results);
    const data = Object.values(results).map(val => (val / Object.values(results).reduce((acc, val) => acc + val, 0)) * 100);

    // Уничтожить старую диаграмму, если она существует
    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Результаты',
                data: data,
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#ff9f40'],
                hoverBackgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#ff9f40']
            }]
        },
        options: {
            responsive: true
        }
    });
}

function retryTest() {
    currentQuestionIndex = 0;
    questions.forEach(q => delete q.selectedAnswer);
    for (const profession in results) {
        results[profession] = 0;
    }
    showQuestion(currentQuestionIndex);
}

function showMessage(message) {
    const messageContainer = document.getElementById("message-container");
    const messageText = document.getElementById("message-text");
    messageText.textContent = message;
    messageContainer.style.display = "flex";
}

function closeMessage() {
    const messageContainer = document.getElementById("message-container");
    messageContainer.style.display = "none";
}
