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

// Images
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listersRef = document.querySelector("#gallery");

function createItemsMarcup(arr) {
  const item = arr.map(({alt, url}) => {
    return `<li>
    <img src=${url} alt=${alt}>
    </li>`;
    
  }).join("");
  listersRef.innerHTML = item;
}

createItemsMarcup(images);

// Counts
let current = 0;
const countRef = document.querySelector("#value")
const btnRef = document.querySelectorAll(`.btn`)

btnRef.forEach((btn) => {
  btn.addEventListener("click", (evt) => {

    const action = evt.target.dataset.action;
    if (action === "increment") {
      current += 1;
      countRef.textContent = current;
    }
    if (action === "decrement") {
      current -= 1;
      countRef.textContent = current;
    }
  });
});