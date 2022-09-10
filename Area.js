const baseInput = document.querySelector("#base-input");
const heightInput = document.querySelector("#height-input");
const areaButton = document.querySelector("#claculate-area");
const output = document.querySelector("#output");

function calculateArea(){
    const area = (baseInput.value*heightInput.value)*1/2;
    output.innerText="area of triangle is "+area;
}
    


areaButton.addEventListener('click',calculateArea)