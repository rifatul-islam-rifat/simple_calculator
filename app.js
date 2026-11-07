/* 
     🧠 const = একটা নাম দিয়ে জিনিস জমিয়ে রাখা
     🧠 getElementById = HTML-এর একটা element ধরা
     🧠 function = একটা কাজের প্যাকেট, নাম ধরে ডাকলে চলে

*/

const Display = document.getElementById("DisplayBox")
let resultShown = false;
function handleInput(value) {
    if(value === "AC" || value === "C") {
        Display.value = `0`;
        resultShown = false;
    } else if(value === "DEL"){
        Display.value = Display.value.slice(0, -1);
        resultShown = false;
        if(Display.value === ""){
        Display.value = `0`;
        }
    } else if(value === "="){

        try{
            Display.value = eval(Display.value)
        } catch{
            Display.value = `Error`;
        }
        resultShown = true;
    } else if(resultShown === true){

        Display.value = value;
        resultShown = false;
    
    
    } else if(Display.value === `0`){
        Display.value = value;
    } else {
        Display.value += value;
    }

   
}