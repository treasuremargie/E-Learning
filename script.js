function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
} 

Quiz.prototype.guess = function(answer) {
    if(this.getCurrentQuestion().isCorrentAnswer(answer)) {
        this.score++;
    }
    this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function() {
return this.currentQuestionIndex >= this.questions.legth;
};
function Question(text,choices,answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
};
var QuizUI = {
    displayNext: function () {
        if(quiz.hasEnded()) {
            this.displayScore();
        }else{
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
},
displayQuestion: function() {
    this.populateIdWithHTML ("question",quiz.getCurrentQuestion().text);
},
displayChoices: function(){
    var choices = quiz.getCurrentQuestion().choices;

    for(var i = 0; i < choices.legth; i++) {
        this.populateIdWithHTML("choice" + i, choices[i]);
        this.guessHandler("guess" + i, choices[i]);
    }
},
displayScore:function() {
    var gameOverHTML = "<h1>Game Over</h1>";
    gameOverHTML +="<h2> Your score is:" + quiz.score+" / 5 </h2>";
    this.populateIdWithHTML("quiz", gameOverHTML);
},

populateIdWithHTML: function(id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
},
guessHandler: function(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        QuizUI.displayNext();
    }
},
displayProgress:function() {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIdWithHTML("progress","Question" + currentQuestionNumber + " of " + quiz.questions.legth);
}
};
//Create Questions
var Question = [
    new Question("which of the following is a computer software?",["monitor" , "monkey", "python", "mars"], "python"),
    new Question("which of the following is part of computer hardware?", [ "mouse","horse","css","cow"], "mouse"),
    new Question("which is the output of print(10//3)?",["6","4","5","3"], "3" ) ,
    new Question("which symbol is used for comments in python" ["*","%","#","@"],"#"),
    new Question("what will: print(2+3*4)?",["7","14","12","2"],"14"),
];
//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();