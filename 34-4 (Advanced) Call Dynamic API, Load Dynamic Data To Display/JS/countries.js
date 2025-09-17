/*                      34-4 (advanced) Call dynamic API, load dynamic data to display */

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
        console.log(country.cca2);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p> Capital: ${country.capital && country.capital.length > 0 ? country.capital[0] : 'No Capital'}</p>
            <button onclick="displayCountryDetails(${country.cca2})">Details</button>
        `;

        countriesContainer.appendChild(countryDiv);
    })
}

const displayCountryDetails = code =>{
    console.log('Details coming soon');
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
        console.log(country.cca2);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p> Capital: ${country.capital && country.capital.length > 0 ? country.capital[0] : 'No Capital'}</p>
            <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;

        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetails = code =>{
    //https://restcountries.eu/rest/v2/alpha/{code}   //!! This link is not working at the moment, but we have to work with this link as the url.
    const url = `https://raw.githubusercontent.com/mledoze/countries/master/countries.json`
    // console.log('Details coming soon', code);
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetail(data[0]));

}

const showCountryDetail = country =>{
    console.log(country);
    const detailContainer = document.getElementById('country-detail');
    detailContainer.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <img src="${country.flags.png}">
    `
}

loadCountries(); 
*/





const countriesContainer = document.getElementById('all-countries');
const detailContainer = document.getElementById('country-detail');

const showLoading = (target, message = "Loading...") => {
    target.innerHTML = `<p style="font-weight: bold; color: #555;">${message}</p>`;
};

const loadCountries = () => {
    showLoading(countriesContainer, "Loading countries...");

    fetch('https://restcountries.com/v3.1/all?fields=name,capital,cca2,flags')
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
        })
        .then(data => {
            if (Array.isArray(data)) {
                displayCountries(data);
            } else {
                console.error("API did not return an array:", data);
                showLoading(countriesContainer, "Failed to load countries.");
            }
        })
        .catch(err => {
            console.error("Failed to fetch countries:", err);
            showLoading(countriesContainer, "Error loading countries.");
        });
};

const displayCountries = countries => {
    countriesContainer.innerHTML = ""; 
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
};

const loadCountryDetails = code => {
    showLoading(detailContainer, "Loading country details...");

    const url = `https://restcountries.com/v3.1/alpha/${code}?fields=name,capital,cca2,flags`;
    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
        })
        .then(country => {
            // ✅ Directly an object, not an array
            showCountryDetail(country);
        })
        .catch(err => {
            console.error("Failed to fetch country details:", err);
            showLoading(detailContainer, "Error loading details.");
        });
};

const showCountryDetail = country => {
    detailContainer.innerHTML = `
        <h3>${country.name.common} (${country.cca2})</h3>
        <p><strong>Official Name:</strong> ${country.name.official}</p>
        <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'No Capital'}</p>
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
        <br><br>
        <button onclick="detailContainer.innerHTML=''">Close</button>
    `;
};

loadCountries();
// ======================================================================================= //
/*
🔑 What changed:

1. 'loadCountryDetails' now treats the response as a single object, not an array.

2. 'showCountryDetail' displays:
    * Common name
    * Official name
    * Capital
    * Flag (PNG)
3. Added a simple Close button to clear the details view.
*/
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