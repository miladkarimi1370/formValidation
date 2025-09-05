const myBorders = document.querySelectorAll("main>div");
const myForm = document.getElementById("loginAndRegister");
let isLogin = true;
const usernameError = document.querySelector("#usernameError");
const passwordError = document.querySelector("#passwordError");
const toastify = document.querySelector("#toastify");
const scriptRegex = /<\s*script\b[^>]*>([\s\S]*?)<\s*\/\s*script\s*>/i;
const userNameRegex = /^[a-zA-Z0-9_]{3,16}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;
let CountOfError = 0;
myForm.addEventListener("mouseenter", changeColor)

function changeColor() {
    myBorders.forEach((item, index) => {

        if (index === 0) {
            item.classList.replace("border-stone-400", "border-green-500");
            item.classList.add("shadow-[0_0_15px_#22c55e]");
            item.classList.replace("border-[0.5px]", "border-4")
        } else if (index === 1) {
            item.classList.replace("border-stone-400", "border-red-500");
            item.classList.add("shadow-[0_0_15px_#ef4444]");
            item.classList.replace("border-[0.5px]", "border-4")
        } else if (index === 2) {
            item.classList.replace("border-stone-400", "border-amber-300");
            item.classList.add("shadow-[0_0_15px_#fcd34d]")
            item.classList.replace("border-[0.5px]", "border-4")
        }
    })
}

myForm.addEventListener("mouseleave", () => {
    myBorders[0].classList.replace("border-green-500", "border-stone-400");
    myBorders[0].classList.remove("shadow-[0_0_15px_#22c55e]");
    myBorders[1].classList.replace("border-red-500", "border-stone-400");
    myBorders[1].classList.remove("shadow-[0_0_15px_#ef4444]")
    myBorders[2].classList.replace("border-amber-300", "border-stone-400");
    myBorders[2].classList.remove("shadow-[0_0_15px_#fcd34d]")
})

document.addEventListener("DOMContentLoaded", checkVariablesInProgarm)

function checkVariablesInProgarm() {
    if (isLogin) {
        myForm.children[0].innerText = "Login";
        myForm.children[5].innerText = "sing-in"
        myForm.children[6].children[0].style.display = "block";
        myForm.children[6].children[1].innerText = "sing-up"
    } else {
        myForm.children[0].innerText = "Register";
        myForm.children[5].innerText = "sing-up";
        myForm.children[6].children[0].style.display = "none";
        myForm.children[6].children[1].innerText = "sing-in"
    }
}

myForm.children[6].children[1].addEventListener("click", (e) => {
    e.preventDefault();
    isLogin = !isLogin;
    checkVariablesInProgarm();

})




myForm.children[1].addEventListener("input", (e) => {

    if (scriptRegex.test(e.target.value) === true) {
        usernameError.classList.remove("hidden");
        usernameError.innerHTML = "its look like your are using the banned character";
        CountOfError++;
    } else {
        usernameError.classList.add("hidden");
        usernameError.innerHTML = "";
        CountOfError > 0 ? CountOfError-- : CountOfError = 0
        if (userNameRegex.test(e.target.value) !== true) {
            usernameError.classList.remove("hidden");
            usernameError.innerHTML = "username must be between 3 to 16 digit and character ";
            CountOfError++;
        } else {
            usernameError.classList.add("hidden");
            usernameError.innerHTML = "";
            CountOfError > 0 ? CountOfError-- : CountOfError = 0
        }
    }

})

myForm.children[3].addEventListener("input", (e) => {
    if (scriptRegex.test(e.target.value) === true) {
        passwordError.classList.remove("hidden");
        passwordError.innerHTML = "its look like your are using the banned character";
        CountOfError++;
    } else {
        passwordError.classList.add("hidden");
        passwordError.innerHTML = "";
        CountOfError > 0 ? CountOfError-- : CountOfError = 0;
        if (passwordRegex.test(e.target.value) !== true) {
            passwordError.classList.remove("hidden");
            passwordError.innerHTML = "password must be between 8 to 12 character includes digit , character and special character";
            CountOfError++;
        } else {
            passwordError.classList.add("hidden");
            passwordError.innerHTML = "";
            CountOfError > 0 ? CountOfError-- : CountOfError = 0
        }
    }
})

myForm.children[5].addEventListener("click", (e) => {
    e.preventDefault()
    if (CountOfError === 0 && myForm.children[1].value !== "" && myForm.children[3].value !== "") {
        toastify.classList.replace("-top-20", "top-10");
        toastify.classList.replace("-left-20", "left-10");

        setTimeout(() => {
              toastify.classList.replace("top-10", "-top-20");
        toastify.classList.replace("left-10", "-left-20");
        }, 2000);
    }

})
