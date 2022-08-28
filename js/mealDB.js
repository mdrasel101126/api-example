const loadMeals = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};
const displayMeals = (meals) => {
  //console.log(meals);
  const mealsContainer = document.getElementById("meals-container");
  meals.forEach((meal) => {
    const divMeal = document.createElement("div");
    divMeal.classList.add("col");
    divMeal.innerHTML = `
    <div onclick="loadMealDetail(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
   </div>
    `;
    mealsContainer.appendChild(divMeal);
  });
};

document.getElementById("btn-search").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerHTML = "";
  const inputText = inputField.value;
  inputField.value = "";
  loadMeals(inputText);
});

const loadMealDetail = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetail(data.meals[0]));
};

const displayMealDetail = (meal) => {
  console.log(meal);
  const mealDetail = document.getElementById("meal-detail");
  mealDetail.innerHTML = `
<div class="card">
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${meal.strMeal}</h5>
  <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
  </div>
</div>
  `;
};
