var bulb = document.querySelector("#bulb");
var on = document.querySelector("#onButton");
var off = document.querySelector("#offButton");

on.addEventListener("click",()=> {
    console.log("hell");
    bulb.classList.remove("off")
    // bulb.classList.add("bulb")
})
off.addEventListener("click",()=> {
    bulb.classList.add("off")
})