//variables
var startPage = document.getElementById("startPage")
var startBtn = document.getElementById("startBtn")
var quiz = document.getElementById("quiz")
var timer = document.getElementById("timer")
var question = document.getElementById("question");
var answer = document.getElementById("answer");
  var questions = [{
        q: "What is Javascript?",
        options: [
            "A stylesheet",
            "A Markdown Language",
            "A Programming Language",
            "A Markup Language",
        ],
        a: 2
    },
    {
        q: "What is CSS?",
        options: [
            "A stylesheet",
            "A Markdown Language",
            "A Programming Language",
            "A Markup Language",
        ],
        a: 0
    },
    {
        q: "Which of the following is NOT a programming language?",
        options: [
            "Javascript",
            "Python",
            "C++",
            "C--",
        ],
        a: 3
    },
    {
        q: "What tag adds Javascript to HTML?",
        options: [
            "java",
            "script",
            "javascript",
            "scriptmate",
        ],
        a: 1
    },
    {
        q: "What values do booleans represent?",
        options: [
            "Numbers",
            "Strings",
            "True/False",
            "Arrays",
        ],
        a: 3
    },
    {
        q: "Objects are variables.",
        options: [
            "True",
            "False",
        ],
        a: 0
    },
    {
        q: "Which of the following is equivalent to i = i - 1",
        options: [
            "i",
            "i = 1-",
            "i - -",
            "num-1",
        ],
        a: 2
    },
    {
        q: "Which symbols contain arrays?",
        options: [
            "{ }",
            "[ ]",
            "( )",
            "< >",
        ],
        a: 1
    },
];

// Game end variable 
function gameOver(){

    var score = document.getElementById("score");
    var highscore = localStorage.getItem("highscore");
    
    quiz.style.display = "none";
                document.getElementById("score").style.display = "block"
                score.textContent = ("Your score is: " + secondsLeft + " !");
                //Save Score to Local Storage
    
    if(highscore !== null){
        if (secondsLeft > highscore) {
            //save initials and score to local storage
            localStorage.setItem("highscore", secondsLeft);      
        }
    }
    else{
        localStorage.setItem("highscore", secondsLeft);
    }
            
    
    }
 



function displayQuiz(){
    startPage.style.display = "none";
    quiz.style.display = "block";
       
    page = 0;
    slides();
//Question text

function slides(){
        console.log(page)
    //present a question
    question.textContent = questions[page].q
    var i = 0
        questions[page].options.forEach(function(choice, index) {
    //Generate Answer as buttons

        var option = document.createElement("button");
        option.setAttribute("class", "button");
        option.setAttribute("id", index);
        option.textContent = questions[page].options[i]
        answer.appendChild(option);
        i++;


})};
// Check if answer is correct

    function verify(e){
            var target = e.target;
            
            if (target.className === "button"){
                var id = parseInt(target.getAttribute("id"))
                console.log(target);
            
                if (id === questions[page].a) {
                console.log('correct')
                }else if (id != questions[page].a) {
                    //if wrong subtract 5 secs from clock
                    secondsLeft = secondsLeft - 5;
                    timer.textContent = secondsLeft
            }   else {
                return
            }
        }page++;
        
        // game end when questions finished or timer reaches 0
        if (page === questions.length || secondsLeft <= 0 ){
           gameOver();
        }else{
            answer.textContent = " "
      //Next Question
            slides();   

        }}  
    answer.addEventListener("click", verify);
}


//timer start

    function timerStart(){
       secondsLeft = 60
        var interval = setInterval(secondTimer, 1000);

        function secondTimer(){
            if (secondsLeft <= 0 || page === page.length) {
                clearInterval(interval);
                gameOver()
         return(secondsLeft)
          }  
          secondsLeft --; 
          timer.textContent = secondsLeft;
        }
    
    };



// event listeners
startBtn.addEventListener("click", displayQuiz);
startBtn.addEventListener("click", timerStart);
