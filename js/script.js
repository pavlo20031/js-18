// Categories
const listRef = document.querySelector("#categoties");
const itemsRef = document.querySelectorAll(".item");

console.log(`У списку ${itemsRef.length} категорії.`);

console.log(itemsRef);


itemsRef.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("ul > li").length;

  console.log(`Категорія ${title}`);
  console.log(`Кількість елементів ${elements}`);
});

// New list
const listerRef = document.querySelector("#ingredients")

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const elem = ingredients.map((ingridient) => {
    const item = document.createElement("li");
    item.textContent = ingridient;
    listerRef.appendChild(item);
    return item;
});
listerRef.append(...elem);