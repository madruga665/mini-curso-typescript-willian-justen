"use strict";
const number1 = document.querySelector("#number-1");
const number2 = document.querySelector("#number-2");
const button = document.querySelector("#sun-button");
const resultBox = document.querySelector("#result-box");
const span = document.querySelector("#result");
function sun(number1, number2) {
    return number1 + number2;
}
button.addEventListener("click", () => {
    const result = sun(Number(number1.value), Number(number2.value));
    span.innerHTML = String(result);
});
