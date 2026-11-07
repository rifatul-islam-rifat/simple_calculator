/* 
     🧠 const = একটা নাম দিয়ে জিনিস জমিয়ে রাখা
     🧠 getElementById = HTML-এর একটা element ধরা
     🧠 function = একটা কাজের প্যাকেট, নাম ধরে ডাকলে চলে

*/

const Display = document.getElementById("DisplayBox")

function handleInput(value) {
    Display.value += value;
}