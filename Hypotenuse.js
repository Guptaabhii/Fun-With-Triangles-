const sideInput = document.querySelectorAll(".side-input");
const hypotenuseButton = document.querySelector("#calculate-hypotenuse");
const output = document.querySelector("#output"); 


function calculateSumSquare(a,b){
    const sumOfSquare = a*a + b*b;
    return sumOfSquare;
}
function calculateHypotenuse(){
    const sumOfSquare = calculateSumSquare(Number(sideInput[0].value),
     Number(sideInput[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
    output.innerText = "The length of hypotenuse is" + lengthOfHypotenuse;
}


hypotenuseButton.addEventListener('click', calculateHypotenuse);