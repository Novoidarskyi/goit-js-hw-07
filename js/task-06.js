const refs = {
  inputTextValidation: document.querySelector("#validation-input"),
};

refs.inputTextValidation.addEventListener("blur", () => {
  if (
    refs.inputTextValidation.value.length ===
    Number(refs.inputTextValidation.dataset.length)
  ) {
    refs.inputTextValidation.classList.remove("invalid");
    refs.inputTextValidation.classList.add("valid");
  } else {
    refs.inputTextValidation.classList.remove("valid");
    refs.inputTextValidation.classList.add("invalid");
  }
});
