const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const createList = (ingredients) => {
  ingredients.forEach((ingredient) => {
    const item = document.createElement("li");
    item.class = "item";
    item.textContent = ingredient;
    list.append(item);
  });
};
createList(ingredients);
