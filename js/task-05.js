const refs = {
  inputName: document.querySelector("#name-input"),
  outputName: document.querySelector("#name-output"),
};

refs.inputName.addEventListener("input", (e) => {
  e.preventDefault();
  refs.outputName.textContent = refs.inputName.value;
  if (refs.inputName.value === "") {
    refs.outputName.textContent = "незнакомец";
  }
});
