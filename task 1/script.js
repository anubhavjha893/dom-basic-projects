function changeTextContent() {
  var main = document.getElementById("#main");
  var btn = document.querySelector("#btn");
  var p = document.querySelector("p");

  btn.addEventListener("click", () => {
    p.textContent = "hello world";
    console.log("clicked");
  });
}

function changeImage() {
  var img1 = document.querySelector("#image1");
  var img2 = document.querySelector("#image2");
  var btn2 = document.querySelector("#imageChange");
  var src1 = img1.src;
  var src2 = img2.src;

  btn2.addEventListener("click", () => {
    img1.src = src2;
    img2.src = src1;
  });
}

function formValidation() {
  var form = document.querySelector("#validationForm");
  var inpts = document.querySelectorAll('input[type="text"]');
  var errorMessage = document.querySelector("#errorMessage");

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
     
console.log(inpts);

    for (var i = 0; i < inpts.length; i++) {
      if (inpts[i].value.trim() === '') {
          errorMessage.classList.remove("hidden");
          errorMessage.textContent = "All fields are required";
    console.log("error");
        break;
      }
      else {
        errorMessage.classList.add("hidden");
        errorMessage.textContent = "";
        console.log("success");
        break;
      }
    }
  });
}

function toDoList() {
  var input = document.querySelector("#entertask");
  var add = document.querySelector("#add");
  var remove = document.querySelector("#remove");
  var ul = document.querySelector("ul"); 
  var li;

  add.addEventListener("click",()=> {
  if(input.value.trim() === "") {
    return;
  }
  else {
    li = document.createElement("li");
    li.textContent = input.value;
     ul.appendChild(li);
     input.value = ""; 
  }
  });
  remove.addEventListener("click",()=> {
    if(ul.lastChild) {
      ul.removeChild(ul.lastChild);
    }
  });
}

function countdownTimer() {
  var start = document.querySelector("#start");
  var stop = document.querySelector("#stop");
  var h5 = document.querySelector("h5");
  
  var int;
  var count = 0;

  start.addEventListener("click",()=> {

    int = setInterval(() => {
      count++;
h5.textContent = count;      
    }, 100);
  });

  stop.addEventListener("click",()=> {
clearInterval(int);
  });
}

countdownTimer();