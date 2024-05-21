// Массив вопросов и ответов
const questions = [
  {
    question: "Какая столица Франции?",
    options: ["Берлин", "Мадрид", "Париж", "Рим"],
    correctAnswer: 2 // Индекс правильного ответа в массиве options
  },
  // Добавьте сюда остальные вопросы...
  {
    question: "Сколько дней в неделе?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2
  },
  {
    question: "Какое число стоит после 10?",
    options: ["9", "11", "12", "13"],
    correctAnswer: 1
  },
  {
    question: "Какого цвета небо?",
    options: ["Красный", "Зеленый", "Синий", "Фиолетовый"],
    correctAnswer: 2
  },
  {
    question: "Сколько букв в слове 'кошка'?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1
  },
  {
    question: "Какое животное мурлычет?",
    options: ["Собака", "Кошка", "Лошадь", "Корова"],
    correctAnswer: 1
  },
  {
    question: "Какое время года идет после зимы?",
    options: ["Осень", "Весна", "Лето", "Зима"],
    correctAnswer: 1
  },
  {
    question: "Сколько пальцев на одной руке?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1
  },
  {
    question: "Какая планета самая близкая к Солнцу?",
    options: ["Марс", "Юпитер", "Венера", "Сатурн"],
    correctAnswer: 2
  },
  {
    question: "Какая самая высокая гора в мире?",
    options: ["Эверест", "Канченджанга", "Лхоцзе", "Макалу"],
    correctAnswer: 0
  }
];

let score = 0;
let currentQuestionIndex = 0; 
let resultsButtonCreated = false; // Флаг для проверки создания кнопки

// Функция для создания разметки для одного вопроса
function createQuestionElement(questionData) {
  const questionDiv = document.createElement("div");
  questionDiv.className = "question";

  const questionText = document.createElement("p");
  questionText.textContent = questionData.question;
  questionDiv.appendChild(questionText);

  const optionsDiv = document.createElement("div");
  optionsDiv.className = "options";

  questionData.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.dataset.index = index; // Сохраняем индекс варианта ответа
    optionButton.addEventListener("click", checkAnswer);
    optionsDiv.appendChild(optionButton);
  });

  questionDiv.appendChild(optionsDiv);

  return questionDiv;
}

function checkAnswer(event) {
  const selectedOptionIndex = parseInt(event.target.dataset.index);
  const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;

  if (selectedOptionIndex === correctAnswerIndex) {
    score++;
  }

  currentQuestionIndex++; // Переходим к следующему вопросу

  // Если все вопросы пройдены, показываем кнопку "Показать результат"
  if (currentQuestionIndex === questions.length && !resultsButtonCreated) {
    showResultsButton();
    resultsButtonCreated = true; // Устанавливаем флаг, чтобы кнопка не создавалась повторно
  }
}

// Функция для отображения кнопки "Показать результат"
function showResultsButton() {
  const resultsElement = document.getElementById("results");
  const resultsButton = document.createElement("button");
  resultsButton.textContent = "Показать результат";
  resultsButton.addEventListener("click", showResults);
  resultsElement.appendChild(resultsButton); 
}

// Функция для отображения результата теста
function showResults() {
  const resultsElement = document.getElementById("results");
  resultsElement.innerHTML = `
    <h2>Результаты</h2>
    <p>Ваш счет: ${score} из ${questions.length}</p>
  `;
}

// Отображение вопросов при загрузке страницы
window.onload = () => {
  const questionsContainer = document.getElementById("questions");

  // Создаем и добавляем каждый вопрос в контейнер
  questions.forEach((question, index) => {
    currentQuestionIndex = index; // Устанавливаем индекс для проверки ответов
    questionsContainer.appendChild(createQuestionElement(question));
  });
};