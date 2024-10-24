var main = document.querySelector(".main");
var boxes = document.querySelectorAll(".box");

boxes.forEach((elem) => {
    elem.addEventListener("mouseenter", (dets) => {
        elem.childNodes[3].style.opacity = "1";

    });
    elem.addEventListener("mouseleave", () => {
        elem.childNodes[3].style.opacity = "0";

    });
    elem.addEventListener("mousemove",(dets)=> {
        elem.childNodes[3].style.left = dets.x + "px";
        elem.childNodes[3].style.top = dets.y + "px";
    
    })
});