const sideInput = document.querySelectorAll(".side-input");
const hypotenuseButton = document.querySelector("#calculate-hypotenuse");
const output = document.querySelector("#output"); 


function calculateSumSquare(a,b){
    const sumOfSquare = a*a + b*b;
    return sumOfSquare;
}
function calculateHypotenuse(base, height){
    const sumOfSquare = calculateSumSquare(base, height);
    const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
    output.innerText = "The length of hypotenuse is " + lengthOfHypotenuse+"m.";
}

function checkValues(){
    const base = Number(sideInput[0].value);
    const height = Number(sideInput[1].value);
    if(base<0 || height<0){
        output.innerText = "Put valid values sides can't be negative."
    }
    else{
        calculateHypotenuse(base, height);
    }
}
hypotenuseButton.addEventListener('click', checkValues);