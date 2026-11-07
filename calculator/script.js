const Display = document.getElementById("Display");


const buttons = document.querySelectorAll("button")

let isResult = false;
// console.log(Display)
// console.log(buttons)

Array.from(buttons).forEach(function(button){
    button.addEventListener("click", function(e){

        
        const buttonValue = e.target.textContent;
        
        if(buttonValue === `AC`){
            Display.value = `0`;
            isResult = false;
        } else if(buttonValue === `DEL`){
            Display.value = Display.value.slice(0,-1)
            if(Display.value === ``){
            Display.value = `0`;
            } 
            isResult = false;

        } else if(Display.value === `0`){
            Display.value = buttonValue;
            isResult = false;
        } else if(buttonValue === `=`){
            try {
                Display.value = eval(Display.value)
                isResult = true;
                
            } catch(Error){
                Display.value = `Error`
            }
        } else if(isResult === true){
            Display.value = buttonValue;
        }

        
        else {
            Display.value += buttonValue;
        }

    })
})