const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const makeMarkupList = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = `${ingredient}`;
    ingredientEl.classList.add('item');
    return ingredientEl;
  });
};

const markupList = makeMarkupList(ingredients);
list.append(...markupList)