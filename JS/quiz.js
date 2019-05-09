var questionNumber = 0;
var numberCorrect = 0;
var answersGiven = [];
var string = "";
let questions = [];

const quizes = {
    WEB: 'Web',
    HTML: 'HTML',
    CSS: 'CSS',
    JS: 'JavaScript'
};

window.document.onload = listQuizes(); //todo comment code

function listQuizes() {

    output = [];
    output.push('<div id="SelectQuiz">');
    output.push('<h2>Select a Quiz</h2>');
    for(const quiz in quizes) {
        output.push('<button id="' + quiz + "Button" + '">' + quizes[quiz] + '</button>');
    }
    output.push('</div>');
    document.getElementById('quiz').innerHTML = output.join('');

    for(const quiz in quizes) {
        var button = document.getElementById(quiz + "Button");
        button.onclick = function () {
            document.getElementsByClassName('Introduction')[0].style.display = 'none';
            if (quiz === "WEB") {
                questions = webQuestions;
                string = "Web";
            }
            if (quiz === "HTML") {
                questions = htmlQuestions;
                string = "HTML";
            }
            if (quiz === "CSS") {
                questions = cssQuestions;
                string = "CSS";
            }
            if (quiz === "JS") {
                questions = jsQuestions;
                string = "JavaScript";
            }
            next();
        }
    }
}

function next() {
    if(questionNumber > 0) {
        var answer = document.querySelector('input[name="' + (questionNumber-1) + '"]:checked').valueOf().value;
        var correct = answer === questions[questionNumber-1].correct;
        answersGiven.push({answer, correct});
        if(correct)
            numberCorrect++;
    }
    if(questionNumber < questions.length)
        makeQuestion(questionNumber);
    else
        printResults();
    questionNumber++;
}

function makeQuestion(questionNumber) {
    output = [];
    output.push('<div id="QuestionDiv">');
    output.push('<a href="quiz.html" id="Return">Return</a>');
    output.push('<p id="Title">' + string + " Quiz" + '</p>');
    output.push('<p id="QuestionNumber">' + "Question: " + (questionNumber + 1) + "/" + questions.length + '</p>');
    output.push('<p id="Question">' + (questions[questionNumber].question) + '</p>');
    var answers = questions[questionNumber].answers;
    for (var answerKey in answers) {
        output.push('<div id="Input">');
        output.push('<input type="radio" id="choice' + questionNumber + '" name="' + questionNumber +  '" value="' + answerKey + '">' + answers[answerKey]);
        output.push('</div>')
    }
    output.push('<button id="Next" onclick="next()">' + "Next" + '</button>');
    output.push('</div>');
    document.getElementById('quiz').innerHTML = output.join('');
}

function printResults() {
    output = [];
    output.push('<div id="AnswerDiv">');
    output.push('<a href="quiz.html" id="Return">Return</a>');
    output.push('<p id="Title">' + string + " Quiz" + '</p>');
    if(numberCorrect === questions.length) {
        output.push('<p id="Result" class="correct">Result: '+ numberCorrect + '/' + questions.length + '</p>');
    }
    else
        output.push('<p id="Result" class="wrong">Result: '+ numberCorrect + '/' + questions.length + '</p>');
    output.push('<p id="YourAnswers">Your Answers:</p>');
    for(var questionKey in questions) {
        var questionNumber = parseInt(questionKey) + 1;
        output.push('<div id="Answer">');
        output.push('<p id="QuestionNumber">Question ' + questionNumber + ':</p>');
        output.push('<p id="Question">' + questions[questionKey].question + '</p>');
        output.push('<div>');
        var answers = questions[questionKey].answers;
        for(var answerKey in answers) {
            if(answersGiven[questionKey].correct === true) {
                if(answerKey === answersGiven[questionKey].answer)
                    output.push('<p class="correct">' + answers[answerKey] + '</p>');
                else
                    output.push('<p>' + answers[answerKey] + '</p>');
            }
            else if(answerKey === answersGiven[questionKey].answer)
                output.push('<p class="wrong">' + answers[answerKey] + '</p>');
            else
                output.push('<p>' + answers[answerKey] + '</p>');
        }
        output.push('</div>');
        output.push('</div>');
    }

    document.getElementById('quiz').innerHTML = output.join('');
}