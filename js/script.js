// let btn=document.querySelector('.btn');
// btn.addEventListener('click', displayQuote);

function displayQuote(){
    //CREATE AN INDEX OF A RANDDOM NUMNBER
    //COVERT IT INTO BETWEEN 0 TO LENGTH OF QUOTES []
    let index=Math.floor(Math.random()*quotes.length);
   
    // DISPLAYING OF THE QUOTE 
    let div=document.querySelector('#quote');
    let quote=`<div class="card">
    <i class="fas fa-quote-right"></i>
    <p>${quotes[index]}</p>
    <i class="fas fa-quote-right"></i>
   </div>
    `;
    div.innerHTML=quote;
}




