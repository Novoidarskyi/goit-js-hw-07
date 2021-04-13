const refs = {
  inputTextValidation: document.querySelector("#validation-input"),
};

refs.inputTextValidation.addEventListener("blur", () => {
  refs.inputTextValidation.classList.add("invalid");

  if (
    refs.inputTextValidation.value.length ===
    Number(refs.inputTextValidation.dataset.length)
  ) {
    refs.inputTextValidation.classList.remove("invalid");
    refs.inputTextValidation.classList.add("valid");
  }
});
