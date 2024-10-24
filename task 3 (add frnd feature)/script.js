var btn = document.querySelector("button");
flag = 0;

btn.addEventListener("click",()=>{
    if(flag === 0){
        btn.style.backgroundColor = "gray"
        btn.textContent = "Friends"
        flag = 1
    }
    else{
        btn.style.backgroundColor = "green"
        btn.textContent = "Add Friend"
        flag = 0

    }

    
})