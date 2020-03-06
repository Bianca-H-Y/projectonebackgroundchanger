/*** Treehouse FSJS Techdegree: project 1- A Random Quote Generator ***/

/*** Created an array with 6 objects containing both a quote source, 
 * and some with a year and citation--later added a occupation ***/

 let quotes = [
   { 
     quote: "I am learning all the time. The tombstone will be my dipolma.",
     source: "Eartha Kitt",
     occupation: "Actor"
   },
   {
     quote: "Understand that the right to choose your own path is a sacred privlege. Use it. Dwill in possiblity.",
     source: "Oprah Winfrey",
     occupation: "Actor"
   },
   {
     quote: "One press account said I was an overnight successs. I thought that was the longest night I've ever spent.",
     source: "Sandra Cisneros",
     citation: "Chicago Tribune",
     year: "1992",
     occupation: "Author"
   },
   {
     quote: "I'm just enjoying my life. I suggest you try it.",
     source: "Tyler Perry",
     occupation: "Actor"
   },
   {
     quote: "I'm not afraid of storms, for I'm learning how to sail my ship.",
     source: "Louisa May Alcott",
     occupation: "Author"
   },
   {
     quote: "She wasn't waiting for a knight, she was waiting for a sword.",
     source: "Atticus",
     year: "2015",
     occupation: "Author"
   },
 ];
 //Tesed array in console--objects in array are working.
 console.log(quotes);

 /***Created getRandomQuote function. Created a randomm number to select a random object from the array 
  * and return a quote. Returning quptes variable displays array with the random function created  */
function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}
//testing getRandomQuote function to see if I am pulling a quote versus a number of the objects in the array.//
console.log(getRandomQuote());

/***Created a printQuote function. Stored the getRandomQuote variable in the function and created a variable to store the HTML strong for the quote and source,
 * added conditional statements for year, citation, and occupation properties.***/
function printQuote () {
  let printRandomQuote = getRandomQuote ();
  let quoteMessage = '';
  //note: dot notation for each property in the objects is object.quote, object.soruce, object.year, object.citation, and object.occupation.//
  quoteMessage += '<p class="quote">'+printRandomQuote.quote+ '</p><p class="source">' + printRandomQuote.source;
  
  //more appealing to have citation listed before the year, switched order code.//
  
  //condition statement to attach citation if included in object.//
  if(printRandomQuote.citation) {
    quoteMessage += '<span class="citation">' +printRandomQuote.citation+ '</span>';
  }
  //conditional statement to attach year if included on object.//
  if(printRandomQuote.year){
    quoteMessage += '<span class="year">' +printRandomQuote.year+ '</span>';
  }

  //Conditional statement to  attach occupation is included on object.//
  if(printRandomQuote.occupation){
    quoteMessage += '<span class="occupation">' +printRandomQuote.occupation+ '</span>';
  }
  //closed quoteMessage call <p></p>
    quoteMessage += '</p>';

  //Testing quoteMessage with console.//
    console.log(quoteMessage);

  //Set the inner html by targetting the div with JS//
  document.getElementById('quote-box').innerHTML = quoteMessage;
}
printQuote();

//Create an array of background colors desired
let backgroundColorElement = ["#675afd", "#ef6aa4", "#c65afd"];
/***Created a getRandomBackGroundColor function to assign a number to the array from 0-2 
and randomly assign a color ***/
function getBackGroundColor () {
  let randomNumber = Math.floor(Math.random() * backgroundColorElement.length);
  return backgroundColorElement[randomNumber];
  document.body.style.backgroundColor = randomNumber;
};


document.body.style.backgroundColor= backgroundColorElement;
//Added a timer to auto change quotes in 20,00 miliseconds or 20 second timer.
setInterval(printQuote, 20000);

//Included code to trigger changing quote when the button is clicked.//
document.getElementById('loadQuote').addEventListener("click", printQuote, false);