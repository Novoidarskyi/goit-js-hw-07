const itemCategoriesRef = document.querySelectorAll(".item");
console.log(`В списке ${itemCategoriesRef.length} категории.`);

itemCategoriesRef.forEach((item) => {
  const itemCategoriesTitleNameRef = item.querySelectorAll("h2");

  itemCategoriesTitleNameRef.forEach((item) => {
    console.log(`Категория: ${item.textContent}`);
  });

  const itemCategoriesNumbersRef = item.querySelectorAll("li");

  console.log(`Количество элементов: ${itemCategoriesNumbersRef.length}`);
});
