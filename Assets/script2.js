//variables
var startPage = document.getElementById("startPage")
var startBtn = document.getElementById("startBtn")
var quiz = document.getElementById("quiz")
var timer = document.getElementById("timer")
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var clear = document.getElementById("reset")
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
            "Java",
            "Python",
            "C++",
            "C--",
        ],
        a: 3
    }






];


//present a question

//if wrong subtract 5 secs from clock

// game end when questions finished or timer reaches 0
//save initials and score to local storage


function displayQuiz(){
    startPage.style.display = "none";
    quiz.style.display = "block";
       var i = 0;
        page = 0;

//Question text
questions.forEach(function() {
    question.textContent = questions[page].q
        })
        questions[page].options.forEach(function(choice, index) {
//Generate Answer as buttons

        var option = document.createElement("button");
        option.setAttribute("class", "button");
        option.setAttribute("id", index);
        option.textContent = questions[page].options[i]
        answer.appendChild(option);
        i++;


});

function verify(e){
        var target = e.target;
        
        if (target.className === "button"){
            var id = parseInt(target.getAttribute("id"))
            console.log(target);
        
            if (id === questions[page].a) {
                console.log("correct")
            }else if (id != questions[page].a) {
                secondsLeft = secondsLeft - 5;
        } }
        clear = ""
        page++;
        return(page)
    }

  answer.addEventListener("click", verify);


}
  



//timer start

    function timerStart(){
       secondsLeft = 60
        var interval = setInterval(secondTimer, 1000);

        function secondTimer(){
            if (secondsLeft <= 0) {
                alert("TIME'S UP!");
                clearInterval(interval);
                return
          }  
          secondsLeft --; 
          timer.textContent = secondsLeft;
        }};



// event listeners
startBtn.addEventListener("click", displayQuiz);
startBtn.addEventListener("click", timerStart);
