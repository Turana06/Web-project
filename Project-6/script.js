/*
const boxFunction = () => {
    let a = 5;
    let b = 10;

    console.log(a + b);
};
*/

// let btn1 = document.querySelector("button");

/*
window.addEventListener("load", () => {
    let a = 5;
    let b = 10;
    console.log(a + b);
});
*/

let btnOpen = document.querySelector("#btn-open");
let btnClose = document.querySelector("#btn-close");
let navBar = document.querySelector(".navbar");
navBar.style.left = "-35%";

btnOpen.addEventListener("click",() =>{
    if(navBar.style.left == "-35%"){
        navBar.style.left = "0"
        
    }else{
        navBar.style.left = "-35%"

    }

});
btnClose.addEventListener("click",() =>{
    navBar.style.left = "-35%";



});































