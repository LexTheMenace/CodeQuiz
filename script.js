var startBtn = document.getElementById("btn");
var question = document.getElementById("question");
var startPage = document.getElementById("startPage");
var game = document.getElementById("quiz");
var answer = document.getElementById("answer");

var timer = document.getElementById("timer")

var questions = {
    q: "What is Javascript?",
    options: [
        "A stylesheet",
        "A Markdown Language",
        "A Programming Language",
        "A Markup Language",
    ],
    a: 2
};

secondsLeft = 60
function gameStart(e) {
    // Hide Start screen and 
startPage.style.display = "none";
//Show first Question
game.style.display = "block";
timer.textContent = secondsLeft;


setInterval(function timer(){
if (secondsLeft > 0){
    secondsLeft--;
    
}
},1000)
nextQ();
}

var page = 0
var score = 0

function verify(e){
    var target = e.target;
    
    if (target.className === "button"){
        var id = parseInt(target.getAttribute("id"))
        console.log(target);
    
        if (id === questions.a) {
            score++;
            
        }else if (id != questions.a) {
            secondsLeft = 5;
    } }
    page++;
    document.getElementById("score").textContent = ("Score: " + score);
}



var i = 0
function nextQ (){
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
})}




// Event Listeners
startBtn.addEventListener("click", gameStart)
answer.addEventListener("click", verify);