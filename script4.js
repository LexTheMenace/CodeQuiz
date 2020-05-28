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





function nextQ(e){

}



function gameStart(e) {
    // Hide Start screen and 
startPage.style.display = "none";
console.log("working")

//Show first Question
game.style.display = "block"

var choice = e.target;
console.log(choice)
question.textContent = questions.q;
//Timer 
secondsLeft = 60

setInterval(function timer(){
timer.textContent = secondsLeft;
if (secondsLeft > 0){
    secondsLeft--;
console.log(secondsLeft),1000 }
 if (secondsLeft === 0){
        game.style.display = "none"
        return
        } })


questions.options.forEach(function(choice) {
    var option = document.createElement("button")
    option.setAttribute("class", "button")
    option.textContent = questions.options;
    answer.appendChild(option)

})


//if (choice.getAttribute("class") === "correct")

// Display Question + number

// Answer choices

//Is question right
//right answer
// is it equal
}

startBtn.addEventListener("click", gameStart)
startBtn.addEventListener("click", timer)