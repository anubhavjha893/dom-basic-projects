var h3 = document.querySelector("h3");
var userInput = document.querySelector("#userInput");

userInput.addEventListener("input",()=>{
var count = userInput.value.trim().length
h3.textContent=`letter typed : ${count}`
})
