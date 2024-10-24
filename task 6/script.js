var homelist = document.querySelector("#homelist");
var aboutlist = document.querySelector("#aboutlist");
var contactlist = document.querySelector("#contactlist");

var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");

homelist.addEventListener("click",function(){
    hideall()
    home.style.display = "block";
})
aboutlist.addEventListener("click",function(){
    hideall()
    about.style.display = "block";
})
contactlist.addEventListener("click",function(){
    hideall()
contact.style.display = "block";
})


function hideall(){
    document.querySelectorAll('h3').forEach((elem)=> {
elem.style.display = 'none';
    })
}
