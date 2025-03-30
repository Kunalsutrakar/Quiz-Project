const questions = [{
        question: "What is the capital of India?",
        options: ["Chandigarh", "Banglore", "NewDelhi", "Goa"],
        correctAnswer: "NewDelhi"
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "F. Scott Fitzgerald"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "In Which Year Ipl Started ?",
        options: ["2008", "2007", "2009", "2010"],
        correctAnswer: "2008"
    },
    {
        question: "What is the name of the oldest lake in the world?",
        options: ["Neel River", "Lake Baikal", "Ganga River", "Dull Lake"],
        correctAnswer: "Lake Baikal"

    },
    {
        question: "What is the national animal of Germany?",
        options: ["Rhino", "The Federal Eagle", "Elephant", "Ostrich"],
        correctAnswer: "The Federal Eagle"
    }

];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("questionText").innerText = questionData.question;

    const answerOptions = document.getElementById("answerOptions");
    answerOptions.innerHTML = "";

    questionData.options.forEach(option => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = option;
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        answerOptions.appendChild(label);
    });
}

function nextQuestion() {
    const selectedAnswer = document.querySelector("input[name='answer']:checked");
    if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer.value === questions[currentQuestionIndex].correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";
    document.getElementById("score").innerText = `${score} / ${questions.length}`;
}

loadQuestion();