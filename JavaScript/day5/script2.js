let email =prompt("enter your email")

localStorage.setItem("email",email)

let emailFromLocalStorage = localStorage.getItem("email");

alert(`email from local storage =  ${emailFromLocalStorage}`)