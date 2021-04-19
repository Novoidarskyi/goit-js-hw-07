const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listIngredientsRef = document.querySelector("#ingredients");

const listOfIngredients = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  return item;
});

listIngredientsRef.append(...listOfIngredients);
