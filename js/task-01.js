const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
console.log("");
items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.innerHTML}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
  console.log("");
});
