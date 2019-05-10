var questionNumber = 0; //what question we are on
var numberCorrect = 0; //how many they got right so far
var answersGiven = []; //the answers given
var string = ""; //Name of the quiz, the title
let questions = []; //the set of questions

const quizes = { //the list of quizes
    WEB: 'Web',
    HTML: 'HTML',
    CSS: 'CSS',
    JS: 'JavaScript'
};

window.document.onload = listQuizes(); //on page load, list the quiz options

function listQuizes() {

    let output = []; //array of question objects
    output.push('<div id="SelectQuiz">');//make select div
    output.push('<h2>Select a Quiz</h2>'); //make a select a quiz heading
    for(const quiz in quizes) { //for all of the options make a button for it
        output.push('<button id="' + quiz + "Button" + '">' + quizes[quiz] + '</button>');
    }
    output.push('</div>');//close the div
    document.getElementById('quiz').innerHTML = output.join('');//add to the quiz div

    for(const quiz in quizes) { //add a new listener for each button
        let button = document.getElementById(quiz + "Button");
        button.onclick = function () {
            document.getElementsByClassName('Introduction')[0].style.display = 'none';//hide the introduction about quizes
            if (quiz === "WEB") {
                questions = webQuestions;
                string = "Web";
            }
            if (quiz === "HTML") {
                questions = htmlQuestions; //set the questions to whichever questions you want to
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
    if(questionNumber > 0) { //search for the div by the name
        let answer = document.querySelector('input[name="' + (questionNumber - 1) + '"]:checked').valueOf().value;
        let correct = answer === questions[questionNumber - 1].correct;
        answersGiven.push({answer, correct}); //push the answer to the array
        if(correct)
            numberCorrect++; //if correct add
    }
    if(questionNumber < questions.length)
        makeQuestion(questionNumber); //add next question
    else
        printResults();//otherwise, if its at the end, add it
    questionNumber++;
}

function makeQuestion(questionNumber) {
    let output = []; //new output
    output.push('<div id="QuestionDiv">'); //make a question div
    output.push('<a href="quiz.html" id="Return">Return</a>'); //add the return button
    output.push('<p id="Title">' + string + ' Quiz</p>'); //Title of the quiz
    output.push('<p id="QuestionNumber">' + "Question: " + (questionNumber + 1) + "/" + questions.length + '</p>');//Display the question number
    output.push('<p id="Question">' + (questions[questionNumber].question) + '</p>'); //Display the question,
    let answers = questions[questionNumber].answers;
    for (let answerKey in answers) {
        output.push('<div id="Input">');//for all of the available answers, as the sizing is dynamic,
        output.push('<input type="radio" id="choice' + questionNumber + '" name="' + questionNumber +  '" value="' + answerKey + '">' + answers[answerKey]); //output the answer in a radio button
        output.push('</div>')//close the input div, purpose of which was so that
    }
    output.push('<button onclick="next()">' + "Next" + '</button>'); //make the next button, which takes the user to the next question. which is what the onclick="next()" is for
    output.push('</div>');//close the div
    document.getElementById('quiz').innerHTML = output.join('');
}

function printResults() {
    let output = []; //new output
    output.push('<div id="AnswerDiv">'); //make the answer div
    output.push('<a href="quiz.html" id="Return">Return</a>');//return button
    output.push('<p id="Title">' + string + " Quiz" + '</p>');//title
    if(numberCorrect === questions.length) {
        output.push('<p id="Result" class="correct">Result: '+ numberCorrect + '/' + questions.length + '</p>');
    }//if 100% green
    else//else red
        output.push('<p id="Result" class="wrong">Result: '+ numberCorrect + '/' + questions.length + '</p>');
    output.push('<p id="YourAnswers">Your Answers:</p>');
    for(let questionKey in questions) {
        let questionNumber = parseInt(questionKey) + 1;//for each question, write it out again
        output.push('<div id="Answer">');//this time display them top to bottom
        output.push('<p id="QuestionNumber">Question ' + questionNumber + ':</p>');
        output.push('<p id="Question">' + questions[questionKey].question + '</p>');
        output.push('<div>');
        let answers = questions[questionKey].answers;
        for(let answerKey in answers) {
            if(answersGiven[questionKey].correct === true) {
                if(answerKey === answersGiven[questionKey].answer)
                    output.push('<p class="correct">' + answers[answerKey] + '</p>');
                else //if you got it right select it green
                    output.push('<p>' + answers[answerKey] + '</p>');
            }
            else if(answerKey === answersGiven[questionKey].answer)
                output.push('<p class="wrong">' + answers[answerKey] + '</p>');
            else//otherwise select it red
                output.push('<p>' + answers[answerKey] + '</p>');
        }
        output.push('</div>');
        output.push('</div>');
    }

    document.getElementById('quiz').innerHTML = output.join('');//add to HTML
}