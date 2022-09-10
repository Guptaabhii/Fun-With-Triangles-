const quizForm = document.querySelector(".quiz-form");
const summitAnswerButton = document.querySelector("#summit-answer-btn");
const output = document.querySelector("#output");

const correctAnswer = ["85°", "60°", "180°", "acute", "90°"];
function calculateScore(){
    let score =0;
    let i=0;
    const formResult = new FormData(quizForm);
    for(let value of formResult.values()){
        if(value === correctAnswer[i]){
            score++;
        }
        i++;
    }
    output.innerText = "your score is " + score;
}
summitAnswerButton.addEventListener('click', calculateScore);