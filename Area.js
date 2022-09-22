const baseInput = document.querySelector("#base-input");
const heightInput = document.querySelector("#height-input");
const areaButton = document.querySelector("#claculate-area");
const output = document.querySelector("#output");

function calculateArea(base, height){
   
    const area = (base*height)*1/2;
    output.innerText="area of triangle is "+area+"m²";
}
    
function checkValues(){
    const base = baseInput.value;
    const height= heightInput.value;

    if(base<0 || height<0){
        output.innerText="put valid values !! sides can't be negative.";
    }
    else{
        calculateArea(base, height);
    }
}

areaButton.addEventListener('click',checkValues);