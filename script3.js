var startBtn = document.getElementById("btn");
var question = document.getElementById("question");
var startPage = document.getElementById("startPage");
var game = document.getElementById("quiz");
var answer = document.getElementById("answer");

var timer = document.getElementById("timer")

var questions = 
    {
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
    a: 4
}]
var i = 0
var page = 0
var score = 0

function nextQ (e){
    answer.textContent = ""
    //Question text
question.textContent = questions.q

//Generate Answer as buttons

 questions.options.forEach(function(choice, index) {
    var option = document.createElement("button");
    option.setAttribute("class", "button");
    option.setAttribute("id", index);
    option.textContent = questions.options[i];
    answer.appendChild(option);
    i++;
answer.addEventListener("click", verify);

function verify(e){
    var target = e.target;
    
    if (target.className === "button"){
        var id = parseInt(target.getAttribute("id"))
        console.log(target);
    }
    if (id === questions.a) {
        var rightAns = document.createElement("h3")
        rightAns.textContent = "Correct!"
        score++;
        
    }else {
        var wrongAns = document.createElement("h3")
        wrongAns.textContent = "Inorrect!"
        timer-5;
    }
    page++;
    document.getElementById("score").textContent = ("Score: " + score);
}



})}

function gameStart(e) {
    // Hide Start screen and 
startPage.style.display = "none";
//Show first Question
game.style.display = "block";
nextQ();
}


/*var choice = e.target;
console.log(choice)

"Time Left:" + timer
*/


// Event Listeners
startBtn.addEventListener("click", gameStart)
