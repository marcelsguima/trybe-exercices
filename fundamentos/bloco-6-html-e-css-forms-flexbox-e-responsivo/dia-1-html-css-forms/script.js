function btnSubmit(event) {
  event.preventDefault();
}

window.onload = function () {
  let bot = document.querySelector("#send");
  bot.addEventListener("click", btnSubmit);
};

function clearFields() {
  let formsInputs = document.querySelectorAll("input");
  let textArea = document.querySelector("textarea");
  for (let index = 0; index < formsInputs.length; index += 1) {
    let userInput = formsInputs[index];
    userInput.value = "";
    userInput.checked = false;
  }
  textArea.value = "";
}
