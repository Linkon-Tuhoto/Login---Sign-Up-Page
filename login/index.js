const Login = document.getElementById("login");
const Signup = document.getElementById("sign");
const namelog = document.getElementById("formtitle");
const nameinput = document.getElementById("inputfield");
const buttonlog = document.getElementById("register");



const pess = document.getElementById("passWord");
const toggle = document.getElementById("togglepass");
const icone = toggle.querySelector("i");

toggle.addEventListener("click", () => {
    if(pess.type === "password"){
        pess.type = "text";
        icone.classList.remove("fa-eye");
        icone.classList.add("fa-eye-slash");
    }
    else{
        pess.type = "password";
        icone.classList.remove("fa-eye-slash");
        icone.classList.add("fa-eye");
    }
});

const form = document.getElementById("forms");
const messages = document.getElementById("message");

let mode = "login";
Login.addEventListener("click", ()=> {
    mode = "login";
    namelog.textContent = "Welcome Back";
    buttonlog.textContent = "Login";
    nameinput.style.display = "none";
    messages.textContent = "";
});

Signup.addEventListener("click", () => {
    mode = "register";
    namelog.textContent = "Register";
    buttonlog.textContent = "Register";
    nameinput.style.display = "flex";
    messages.textContent = "";
})

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("Name").value;
    const email = document.getElementById("Email").value;
    const password = document.getElementById("passWord").value;

    if(mode === "register"){
        registerUser(name, email, password);
    }
    else{
        loginUser(email, password);
    }
});

function registerUser(name, email, password){
    if(!name || !email || !password){
        messages.textContent = "Please fill all the fields";
        messages.style.color = "red";
        return;
    }

    const user = {
        name:name,
        email:email,
        password:password
    };

    localStorage.setItem("user", JSON.stringify(user));

    messages.textContent = "Registration Successful! Please Login";
    messages.style.color = "green";

    mode = "login";
    namelog.textContent = "Welcome Back";
    buttonlog.textContent = "Login";
    nameinput.style.display = "none";
};


function loginUser(email, password){
    const saved = localStorage.getItem("user");

    if(!saved){
        messages.textContent = "User not found. Please register";
        messages.style.color = "red";
        return;
    }

    const user = JSON.parse(saved);

    if (email === user.email && password === user.password){
       
        messages.textContent = "Login Successful";
        messages.style.color = "green";

        setTimeout(() => {
            window.location.href ="calc.html";
        },1000);
    }
    else {
        messages.textContent = "Incorrect email or password";
        messages.style.color = "red";
    }
}
