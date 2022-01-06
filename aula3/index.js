var number1 = document.querySelector("#number-1");
var number2 = document.querySelector("#number-2");
var button = document.querySelector("#sun-button");
var resultBox = document.querySelector("#result-box");
var span = document.querySelector("#result");
function sun(number1, number2) {
    return number1 + number2;
}
button.addEventListener("click", function () {
    var result = sun(Number(number1.value), Number(number2.value));
    span.innerHTML = String(result);
});
