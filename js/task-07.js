const refs = {
  input: document.querySelector("#font-size-control"),
  textInput: document.querySelector("#text"),
};

refs.input.addEventListener(
  "input",
  (event) => (refs.textInput.style.fontSize = event.target.value + "px")
);
