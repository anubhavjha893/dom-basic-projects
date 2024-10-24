var btn = document.querySelector("button");
var bar = document.querySelector(".progress");
btn.addEventListener("click",()=> {
    var counter = 0;
        var clr = setInterval(()=> {
            counter++
            bar.style.width = counter + "%";
            console.log(counter);
            if(bar.style.width === "105%") {
                
                alert("download complete");
                btn.innerHTML = "Download Completed";
                clearInterval(clr); 
            }
        },100)


})