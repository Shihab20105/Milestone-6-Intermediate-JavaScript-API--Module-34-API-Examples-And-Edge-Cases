// Load meals from API
const loadMeals = async (searchText = "") => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayMeals(data.meals);
  } catch (error) {
    console.error("Error loading meals:", error);
  }
};

// Display meals as cards
const displayMeals = (meals) => {
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerHTML = "";

  if (!meals) {
    mealsContainer.innerHTML = `
      <p class="text-center text-danger fw-bold">❌ No meals found. Try another search.</p>
    `;
    return;
  }

  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");

    mealDiv.innerHTML = `
      <div class="card h-100 meal-card shadow-sm">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text text-muted">${meal.strCategory || "Unknown"} - ${meal.strArea || "N/A"}</p>
          <button onclick="loadMealDetail('${meal.idMeal}')" 
            class="btn btn-warning w-100" 
            data-bs-toggle="modal" 
            data-bs-target="#mealDetails">View Details</button>
        </div>
      </div>
    `;
    mealsContainer.appendChild(mealDiv);
  });
};

// Search meals
const searchMeals = () => {
  const searchText = document.getElementById("search-field").value.trim();
  if (!searchText) {
    alert("Please enter a meal name!");
    return;
  }
  loadMeals(searchText);
};

// Load single meal details
const loadMealDetail = async (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]);
  } catch (error) {
    console.error("Error loading meal details:", error);
  }
};

// Display meal details in modal
const displayMealDetails = (meal) => {
  document.getElementById("mealDetailsLabel").innerText = meal.strMeal;

  const mealsDetails = document.getElementById("mealDetailsBody");
  mealsDetails.innerHTML = `
    <div class="text-center">
      <img class="img-fluid rounded mb-3" src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h4>${meal.strMeal}</h4>
      <p><strong>Category:</strong> ${meal.strCategory}</p>
      <p><strong>Area:</strong> ${meal.strArea}</p>
      <p class="text-start">${meal.strInstructions.slice(0, 300)}...</p>
      <a href="${meal.strYoutube}" target="_blank" class="btn btn-danger">▶ Watch Recipe Video</a>
    </div>
  `;
};

// ✅ Accessibility fix: focus back on search field when modal closes
const mealModal = document.getElementById("mealDetails");
mealModal.addEventListener("hidden.bs.modal", () => {
  const searchField = document.getElementById("search-field");
  if (searchField) searchField.focus();
});

// Load default meals on startup
loadMeals("fish");
