var card = document.querySelector(".card");
var icon = document.querySelector("#icon");

card.addEventListener("dblclick",() => {
icon.style.transform = "translate(-50%,-50%) scale(1.2)";
setTimeout(() => {
    icon.style.transform = "translate(-50%,-50%) scale(0)";
},1000)

})