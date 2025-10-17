function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}
Quiz.prototype.guess = function(answer){
    if(this.getCurrentQuestion().isCorrentAnswer(answer)){
        this.score++;
    }
    this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function(){
    return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function(){
return this.currentQuestionIndex >= this.questions.legth;
};
function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
Question.prototype.isCorrectAnswer = function (choice){
    return this.answer === choice;
};
var QuizUI = {
    displayNext: function(){
        if(quiz.hasEnded()){
            this.displayScore();
        }else{
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
},
displayQuestion: function(){
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
    this.populationIdWithHTML("quiz",gameOverHTML);
},
populateIdWithHTML: function(id,text){
    var element = document.getElementById(id);
    element.inneerHTML = text;
},
guessHandler: function(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        QuizUI.displayNext();
    }
},
displayProgress:function(){
    var currentQuestionNumber = 
}
}