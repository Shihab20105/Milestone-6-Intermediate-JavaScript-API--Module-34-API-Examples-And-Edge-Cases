/*                      34-8 handle fetch error, use try catch and async await */

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





/* 
const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
};

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
            <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-into additional content. This content is a little bit longer.</p>
              <button   onclick="loadMealDetail (${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
              Details
              </button>
            </div>
          </div>    
        `;
        // Step 4: appendChild
        mealsContainer.appendChild(mealDiv);
    });
};

const searchMeals = () => {
    // console.log('btn clicked');
    const searchText = document.getElementById('search-field').value;
    // search meals
    console.log(searchText);
    loadMeals(searchText);
};

const loadMealDetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(idMeal);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]));
}

const displayMealDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealsDetails = document.getElementById('mealDetailsBody');
    mealsDetails.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}">
    `;
};

loadMeals('rice'); 
*/






/* 
const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
};

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
            <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-into additional content. This content is a little bit longer.</p>
              <button   onclick="loadMealDetail2('${meal.idMeal}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
              Details
              </button>
            </div>
          </div>    
        `;
        // Step 4: appendChild
        mealsContainer.appendChild(mealDiv);
    });
};

const searchMeals = () => {
    // console.log('btn clicked');
    const searchText = document.getElementById('search-field').value;
    // search meals
    console.log(searchText);
    loadMeals(searchText);
};

const loadMealDetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(idMeal);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
        .catch(error => {

            console.log(error)

        });
}

// async await 
const loadMealDetail2 = async(idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]);
}

const displayMealDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealsDetails = document.getElementById('mealDetailsBody');
    mealsDetails.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}">
    `;
};

// ✅ Accessibility fix: move focus when modal closes
const mealModal = document.getElementById('mealDetails');
mealModal.addEventListener('hidden.bs.modal', () => {
  const searchField = document.getElementById('search-field');
  if (searchField) {
    searchField.focus();
  }
});

// Load initial meals
loadMeals('fish'); 
*/






const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
};

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
            <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-into additional content. This content is a little bit longer.</p>
              <button   onclick="loadMealDetail2('${meal.idMeal}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
              Details
              </button>
            </div>
          </div>    
        `;
        // Step 4: appendChild
        mealsContainer.appendChild(mealDiv);
    });
};

const searchMeals = () => {
    // console.log('btn clicked');
    const searchText = document.getElementById('search-field').value;
    // search meals
    console.log(searchText);
    loadMeals(searchText);
};

const loadMealDetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(idMeal);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
        .catch(error => {

            console.log(error)

        });
}

// async await 
const loadMealDetail2 = async(idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetails(data.meals[0]);
    }
    catch(error){
        console.log(error);
    }
}

const displayMealDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealsDetails = document.getElementById('mealDetailsBody');
    mealsDetails.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}">
    `;
};

// ✅ Accessibility fix: move focus when modal closes
const mealModal = document.getElementById('mealDetails');
mealModal.addEventListener('hidden.bs.modal', () => {
  const searchField = document.getElementById('search-field');
  if (searchField) {
    searchField.focus();
  }
});

// Load initial meals
loadMeals('fish');


// ====================================================================================== //
/*
//The difference is in the 'alt' attribute:

1. With "..."

<img src="${meal.strMealThumb}" class="card-img-top" alt="...">

* This is just placeholder text that Bootstrap docs often use in examples.
* It doesn’t describe the image → bad for accessibility (screen readers won’t know what the image is).

2. With '${meal.strMeal}'

<img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">

* Here, the 'alt' text is set dynamically to the meal’s name.
* Example: if the meal is "Chicken Biryani", the rendered HTML will be:

<img src="https://www.themealdb.com/images/media/meals/xxyxxy.jpg" alt="Chicken Biryani">

* This makes the image accessible and meaningful for screen readers and improves SEO.

✅ Best practice is to always make 'alt' text descriptive — in your case, '${meal.strMeal}' is perfect.
*/