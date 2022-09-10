const inputs = document.querySelectorAll(".input-angle");
const isTriangleBttn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    console.log(sumOfAngles);
    return sumOfAngles;
}
function isTriangle(){
    const angleSum = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),
     Number(inputs[2].value));
     if(angleSum===180){
        output.innerText = "Yay! these angles form a Triangle";
     }else{
        output.innerText = "Oops! these angles not form a Triangle";
     }
}
    isTriangleBttn.addEventListener('click', isTriangle)