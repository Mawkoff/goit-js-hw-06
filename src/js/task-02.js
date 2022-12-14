// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
const makeIngredientsList = (options) => {
  return options.map((option) => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = option;

    return liEl;
  });
};

const elements = makeIngredientsList(ingredients);
console.log(elements);
listEl.append(...elements);
