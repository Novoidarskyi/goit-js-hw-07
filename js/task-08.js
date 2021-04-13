const refs = {
  input: document.querySelector("input"),
  makeRenderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
};

function randomizer() {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
}

function createBoxes(amount) {
  let size = 30;
  const arr = [];
  destroyBoxes();
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = div.style.height = size + "px";
    div.style.backgroundColor = randomizer();
    arr.push(div);
    size += 10;
  }
  document.querySelector("#boxes").append(...arr);
}

function destroyBoxes() {
  document.querySelector("#boxes").innerHTML = "";
  refs.input.value = "";
}

refs.makeRenderBtn.addEventListener("click", () => {
  if (refs.input.max >= Number(refs.input.value)) {
    createBoxes(Number(refs.input.value));
    return;
  }
  alert("Необходимо ввести значение  от 0 до 100");
});

refs.destroyBtn.addEventListener("click", destroyBoxes);
