let currentInput = "";

let displayBox = document.querySelector('.display-box');



document.querySelectorAll('.btn-number').forEach(function(element) {
    element.addEventListener('click', function(evt) {
        currentInput = currentInput + evt.target.innerText
        writeOnDisplay()
    })
});



//Operators
document.querySelector('.plus').addEventListener('click', function() {    
    currentInput = currentInput + "+"; 
})

document.querySelector('.minus').addEventListener('click', function() {   
    currentInput = currentInput + "-"; 
})

document.querySelector('.multiplication').addEventListener('click', function() { 
    currentInput = currentInput + "*"; 
})

document.querySelector('.division').addEventListener('click', function() {  
    currentInput = currentInput + "/";
})


//Other Buttons
document.querySelector('.clear').addEventListener('click', clearScreen);

document.querySelector('.equal').addEventListener('click', function() {
   displayBox.innerHTML= eval(currentInput);
})


//Writing on the screen calculator
function writeOnDisplay(){
 displayBox.innerHTML = currentInput;
}



//clearing the screen calculator
function clearScreen(){
    window.location.reload()
    writeOnDisplay()
}


