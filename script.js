const form = document.querySelector("form");
const pass1 = document.querySelector("#password1");
const pass2 = document.querySelector("#password2");
const error = document.querySelector(".error");

form.addEventListener("submit", e => {
  if (pass1.value !== pass2.value) {
    e.preventDefault();
  }
});

[pass1, pass2].forEach(e => e.addEventListener("keyup", isMatching));

function isMatching() {
  if (pass1.value !== pass2.value) {
    error.innerHTML = "Passwords do not match!";
    pass1.style.border = "2px solid red";
    pass2.style.border = "2px solid red";
  } else {
    error.innerHTML = " ";
  }
}
