/*                      34-6 Display dynamic search result using bootstrap cards */

/* 
const loadMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    // console.log(meals);
    // Step 1: container element
    const mealsContainer = document.getElementById('meals-container');
    meals.forEach(meal => {
        console.log(meal);
        // Step 2: create child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        // Step 3: set content of the child
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</p>
            </div>
        `

        // Step 4: appendChild
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeals = () =>{
    // console.log('btn clicked');
    const searchText = document.getElementById('search-field').value;
    // search meals
    console.log(searchText);
}

loadMeals(); 
*/






/* 
const loadMeals = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    // console.log(meals);
    // Step 1: container element
    const mealsContainer = document.getElementById('meals-container');
    meals.forEach(meal => {
        console.log(meal);
        // Step 2: create child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        // Step 3: set content of the child
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</p>
            </div>
        `

        // Step 4: appendChild
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeals = () =>{
    // console.log('btn clicked');
    const searchText = document.getElementById('search-field').value;
    // search meals
    console.log(searchText);
}

loadMeals(); 
*/






/* 
const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    // console.log(meals);
    // Step 1: container element
    const mealsContainer = document.getElementById('meals-container');
    meals.forEach(meal => {
        console.log(meal);
        // Step 2: create child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        // Step 3: set content of the child
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</p>
            </div>
        `

        // Step 4: appendChild
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeals = () =>{
    // console.log('btn clicked');
    const searchText = document.getElementById('search-field').value;
    // search meals
    console.log(searchText);
}

loadMeals('fish'); 
*/






/* 
const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    // console.log(meals);
    // Step 1: container element
    const mealsContainer = document.getElementById('meals-container');
    meals.forEach(meal => {
        console.log(meal);
        // Step 2: create child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        // Step 3: set content of the child
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</p>
            </div>
        `

        // Step 4: appendChild
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeals = () =>{
    // console.log('btn clicked');
    const searchText = document.getElementById('search-field').value;
    // search meals
    console.log(searchText);
}

loadMeals('rice'); 
*/






/* 
const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    // console.log(meals);
    // Step 1: container element
    const mealsContainer = document.getElementById('meals-container');
    meals.forEach(meal => {
        console.log(meal);
        // Step 2: create child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        // Step 3: set content of the child
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</p>
            </div>
        `

        // Step 4: appendChild
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeals = () =>{
    // console.log('btn clicked');
    const searchText = document.getElementById('search-field').value;
    // search meals
    console.log(searchText);
    loadMeals(searchText);
}

loadMeals('chicken'); 
*/





const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    // console.log(meals);
    // Step 1: container element
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerText = '';
    meals.forEach(meal => {
        console.log(meal);
        // Step 2: create child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        // Step 3: set content of the child
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</p>
            </div>
        `

        // Step 4: appendChild
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeals = () =>{
    // console.log('btn clicked');
    const searchText = document.getElementById('search-field').value;
    // search meals
    console.log(searchText);
    loadMeals(searchText);
}

loadMeals('rice');