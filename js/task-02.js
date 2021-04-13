const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listIngredientsRef = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  let item = document.createElement("li");
  item.textContent = `${ingredient}`;
  listIngredientsRef.appendChild(item);
});
