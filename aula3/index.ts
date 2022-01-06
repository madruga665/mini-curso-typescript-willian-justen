const number1 = <HTMLInputElement>document.querySelector("#number-1");
const number2 = <HTMLInputElement>document.querySelector("#number-2");
const button = <HTMLButtonElement>document.querySelector("#sun-button");
const resultBox = <HTMLDivElement>document.querySelector("#result-box");
const span = <HTMLSpanElement>document.querySelector("#result")

function sun(number1: number, number2: number) {
  return number1 + number2;
}

button.addEventListener("click", () => {
  const result = sun(Number(number1.value), Number(number2.value));
  span.innerHTML = String(result);
});
