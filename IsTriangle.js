const inputs = document.querySelectorAll(".input-angle");
const isTriangleBttn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}
function isTriangle(angle1, angle2, angle3){
    const angleSum = calculateSumOfAngles(angle1, angle2, angle3);
     if(angleSum===180){
        output.innerText = "Yay! these angles form a Triangle.";
     }else{
        output.innerText = "Oops! these angles not form a Triangle.";
     }
}

    function checkValues(){
        angle1 = Number(inputs[0].value);
        angle2 = Number(inputs[1].value);
        angle3 = Number(inputs[2].value);

        if(angle1<0 || angle2<0 || angle3<0){
            output.innerText = "Put valid values angles can't be negative.";
        }
        else{
             isTriangle(angle1, angle2, angle3);
        }
        
    }
    isTriangleBttn.addEventListener('click', checkValues);