let inputText =document.getElementById("input-text");

let addBtn = document.getElementById("add-button");
let clearBtn = document.getElementById("clear-button");

let taskList = document.querySelector(".to-do-monitor");

addBtn.addEventListener("click", ()=>{

    let paragraphTag = document.createElement("p");
    paragraphTag.classList.add("paragraph-tag");
    e.preventDefault();
    taskList .appenChild("paragraphTag");

    paragraphTag.innerHTML = inputText.value;
    inputText.value = "";

    paragraphTag.addEventListener("click",()=>{
        paragraphTag.style.textDecoration = "line-through";
         
    });
    paragraphTag.addEventListener("dbclick",()=>{
        toDoMonitor.removeChild("paragraphTag");
         
    });


    clearBtn.addEventListener("click", ()=>{
        paragraphTag.remove();
    });

    
});
