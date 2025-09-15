/*                      34-1 Basic API recap Quotes */

// console.log('Hello from quotes');

/* 
console.log(loadQuote2);
function loadQuote2(){

}

const loadQuote = () =>{
    console.log('Quotes loading');
}  
*/




/* 
const loadQuote = () =>{
    // console.log('Quotes loading');
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
} 

const displayQuote = quote =>{
    console.log(quote);
}

loadQuote(); 
*/


const loadQuote = () =>{
    // console.log('Quotes loading');
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
} 

const displayQuote = quote =>{
    const blockQuote = document.getElementById('quote');
    console.log(quote);
    blockQuote.innerHTML = quote.quote;
}

loadQuote();
