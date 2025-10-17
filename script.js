const questions = [
    {
       question: "Which of the following is a hardware device? ",
       answers: [
        { text:"HML", correct:false },
        {text:"Monitor" , correct:true},
        {text:"CSS" , correct:false},
        {text:"nail", correct:false},
       ]
    },
    {
        question:"which symbol is used for comments in python?",
        answer:[
            {text:"*", correct:false},
            {text:"&", correct:false},
            {text:"!", correct:false},
            {text:"#", correct:true},
        ]
    },
    {
        question:"what will this print:print(2 + 3 * 4)",
        answer:[
            {text:"21",correct:false},
            {text:"14", correct:true},
            {text:"13", correct:false},
            {text:"12", correct:false},
        ]
    },
    {
        question:"which of the following is part of computer software?",
        answer:[
            {text:"monitor", correct:false},
            {text:"keyboard",correct:false},
            {text:"python",correct:true},
            {text:"car",correct:false},
        ]
    }
];
const questionElement = document.getElementById("question");
const  answerButton= document.getElementById("answe-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.array.forEach(element => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}
startQuiz();