const inputdisplay = document.querySelector(".inputdisplay");
const outputdisplay = document.querySelector(".outputdisplay");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const digits = document.querySelectorAll(".digits");
let string = "";
Array.from(digits).forEach((digit) => {
  digit.addEventListener("click", (e) => {
    string += e.target.textContent;
    inputdisplay.textContent = string;
  });
});
equals.addEventListener("click", () => {
  outputdisplay.innerHTML = eval(string);
  console.log(string);
});
clear.addEventListener("click", () => {
  string = "";
  outputdisplay.textContent = string;
  if (inputdisplay.textContent != "Input") {
    inputdisplay.textContent = 0;
  }
});
