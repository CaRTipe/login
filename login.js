var button = document.querySelector("button")
var button = document.querySelector("button")
var login = document.getElementById("login")
var signup = document.getElementById('signup')

// function changePage() {
//     var login = document.getElementById("login")
//     var signup = document.getElementById('signup')
//     appearPage()
// }
// function appearPage() {
//     var signup = document.getElementById("signup")
//     signup.style.visibility = signup
    

// }
function showSignup() {
    var signup = document.getElementById("signup")
    signup.style.visibility = "visible"
    var login = document.getElementById("login")
    login.style.visibility = "hidden"
    
}
function showLogin() {
    var login = document.getElementById("login")
    login.style.visibility = "visible"
    var signup = document.getElementById("signup")
    signup.style.visibility = "hidden"
}
