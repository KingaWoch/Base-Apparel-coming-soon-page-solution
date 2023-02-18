const submit = document.getElementById("submit");
const email = document.getElementById("email");
const label = document.querySelector(".label");
const error = document.querySelector(".error");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    let emailValue = email.value;

    if(!emailValue.match(pattern)) {
        label.classList.add("active");
        error.classList.add("active");
        email.style.outline = "1px solid hsl(0, 93%, 68%)"
    } else {
        label.classList.remove("active");
        error.classList.remove("active");
        email.style.outline = "none";
    }

})

