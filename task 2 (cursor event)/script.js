var main =document.querySelector(".main");
var h1 = document.querySelector("h1");
var cursor = document.querySelector(".cursor");
console.log(cursor);

main.addEventListener("mousemove",(dets)=> {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
})