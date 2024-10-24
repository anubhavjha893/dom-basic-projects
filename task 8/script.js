var prg = document.querySelector("#progress-bar");
var btn = document.querySelector("#start");
var h3 = document.querySelector("h3");

btn.addEventListener("click",()=> {
    var count = 0;
   
    var clr =setInterval(() => {
        if(count === 99){
            clearInterval(clr);
        }
        count++;
        prg.style.width = count + '%';
        h3.textContent = `Downloading... ${count}%`;
        if(h3.textContent === "Downloading... 100%"){
            h3.textContent = "Download Completed";
            h3.style.color = "green";
            btn.style.display = "none";
        }
        
    }, 100);
})
