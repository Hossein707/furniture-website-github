const menubtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
let myicon=menubtn.querySelector('i');

const accountbtn = document.getElementById("account-btn");
const account = document.getElementById("account");

const loginbtn=document.getElementById("login-btn");
const registerbtn=document.getElementById("register-btn");
const loginForm=document.getElementById("login-form");
const registerForm=document.getElementById("register-form");

const shoppingbtn=document.getElementById("shopping-btn");
const shoppingCart=document.querySelector(".shopping-cart");


menubtn.onclick = () => {
    menu.classList.toggle("active");
    account.classList.remove("active");
    shoppingCart.classList.remove("active");
    myicon.classList.toggle("fa-remove");
}



accountbtn.onclick = () => {
    account.classList.toggle("active");
    menu.classList.remove("active");
    shoppingCart.classList.remove("active");
}
loginbtn.onclick=()=>{
    registerForm.style.right="-380px";
    loginForm.style.right="20px";
}
registerbtn.onclick=()=>{
    loginForm.style.right="380px";
    registerForm.style.right="20px";
}


shoppingbtn.onclick=()=>{
    shoppingCart.classList.toggle("active");
    menu.classList.remove("active");
    account.classList.remove("active");
}

window.onscroll=()=>{
    menu.classList.remove('active')
    account.classList.remove("active");
    shoppingCart.classList.remove("active");
    myicon.classList.remove('fa-remove')
}