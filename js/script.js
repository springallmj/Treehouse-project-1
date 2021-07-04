/******************************************
project 1 - A Random Quote Generator

WRITTEN BY MATTHEW SPRINGALL
Program randomly selects an quote from the array quotes and prints its 
details to the browser.
Additionally, program changes the background colour each time a quote is printed and
refreshes the quote every 10 seconds.
******************************************/

//QUOTES ARRAY
const quotes = [
  {quote:"The way to get started is to quit talking and begin doing.", 
    source:"Walt Disney", citation:"", year:"UnKnown", 
    tags:["Inspirational", "Action"]},
  {quote:"The future belongs to those who believe in the beauty of their dreams.", 
    source:"Eleanor Roosevelt", citation:"Nevada State Journal, In Review: My Day by Eleanor Roosevelt, Quote Page 4, Column 4, Reno, Nevada", year:"1957", 
    tags:["Inspirational", "Dreamer", "Politics"]},
  {quote:"It is during our darkest moments that we must focus to see the light.", 
    source:"Aristotle", citation:"", year:"Unknown", 
    tags:["Inspirational", "Hope"]},
  {quote:"Never let the fear of striking out keep you from playing the game.", 
    source:"Babe Ruth", citation:"www.baberuth.com/quotes/", year:"1939", 
    tags:["Inspirational", "Sports"]},
  {quote:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", 
    source:"Dr. Seuss", citation:"Oh, the Places You'll Go!", year:"1990", 
    tags:["Inspirational", "Children", "Author"]},
  {quote:"Life is a succession of lessons which must be lived to be understood.", 
    source:"Ralph Waldo Emerson", citation:"", year:"Unknown", 
    tags:["Inspirational"]},
  {quote:"Life is what happens when you're busy making other plans.", 
    source:"John Lennon", citation:"Double Fantasy", year:"1980", 
    tags:["Inspirational", "Music"]},
  {quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.", 
    source:"Nelson Mandela", citation:"", year:"Unknown", 
    tags:["Inspirational", "Political"]},
  {quote:"Keep smiling, because life is a beautiful thing and there's so much to smile about.", 
    source:"Marilyn Monroe", citation:"", year:"1956", 
    tags:["Music", "Actor"]},
  {quote:"Life is made of ever so many partings welded together.", 
    source:"Charles Dickens", citation:"Great Expectations", year:"1861", 
    tags:["Author"]},
];

const randomNumber = (max) => Math.floor(Math.random()*(max));
let index=0;
let current;
let quoteBox=document.getElementById("quote-box");
let tags=[];
let backgroundColor;
setInterval(printQuote, 10000);

quoteBox.innerHTML=printQuote();

//GET A RANDOM QUOTE FROM QUOTES ARRAY
function getRandomQuote(arr){
  index=randomNumber(quotes.length);
  //the below while loop ensures the random numer will not repeat
  while(index===current){index=randomNumber(quotes.length);}
  current=index;
  return arr[index];
}

//OUTPUTS A RANDOM RGB COLOR IN A STRING
function randomColor(){
  return `rgb(${randomNumber(256)} ,${randomNumber(256)}, ${randomNumber(256)})`;
}

//PRINT QUOTE AND THE QUOTES MEMBERS TO DOCUMMENT VIA A FORMATED STRING
//UPDATES DOCUMENT BACKGROUNDCOLOUR
function printQuote(){
  document.body.style.backgroundColor=randomColor();
  let quote=getRandomQuote(quotes);

  let html=`
  <p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`;
  if(quote.citation){
    html+=`<span class="citation"> ${quote.citation}</span>`
  }
  if(quote.year){
    html+=`<span class="year"> ${quote.year} </span>`
  }
  if(quote.tags.length>0){
    html+=`<br><br><span class="tags">Tags: ${quote.tags.join(", ")}</span>`
  }
  html+=`</p>`
  quoteBox.innerHTML=html;

  return html;
}

//CLICK BUTTON TO PRINT QUOTE
document.getElementById('load-quote').addEventListener("click", printQuote, false);