/*                      34-3 International travel, display country name, capital */

/*
const loadCountries = () =>{
    fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const countriesContainer = document.getElementById('all-countries');
    // console.log(countries);
    // for(country of countries){
    //     console.log(country);
    // }
    countries.forEach(country =>{
        console.log(country.name.common);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
        `;

        countriesContainer.appendChild(countryDiv);
    })
}

loadCountries(); 
*/




/* 
const loadCountries = () =>{
    fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const countriesContainer = document.getElementById('all-countries');
    // console.log(countries);
    // for(country of countries){
    //     console.log(country);
    // }
    countries.forEach(country =>{
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital[0]}</p>
        `;

        countriesContainer.appendChild(countryDiv);
    })
}

loadCountries(); 
*/






/* 
const loadCountries = () =>{
    fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const countriesContainer = document.getElementById('all-countries');
    // console.log(countries);
    // for(country of countries){
    //     console.log(country);
    // }
    countries.forEach(country =>{
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p> Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        `;

        countriesContainer.appendChild(countryDiv);
    })
}

loadCountries(); 
*/





const loadCountries = () =>{
    fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const countriesContainer = document.getElementById('all-countries');
    // console.log(countries);
    // for(country of countries){
    //     console.log(country);
    // }
    countries.forEach(country =>{
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p> Capital: ${country.capital && country.capital.length > 0 ? country.capital[0] : 'No Capital'}</p>
        `;

        countriesContainer.appendChild(countryDiv);
    })
}

loadCountries();

// ======================================================================================= //

/*
The difference is:

// country.capital ? country.capital[0] : 'No Capital'

* Only checks if 'country.capital' exists (not if it has elements).
* If it's an empty array '[]', it passes the check but still gives 'undefined'.
___________________________________________________________

// country.capital && country.capital.length > 0 ? country.capital[0] : 'No Capital'

Checks both:
    1. Does 'capital' exist?
    2. Does it have at least one element?
* If yes → show the first capital.
* If no → "No Capital".
So this version will correctly show "No Capital" when the array is empty.
___________________________________________________________

👉 Or shorter modern way:

// country.capital?.[0] || 'No Capital'
*/