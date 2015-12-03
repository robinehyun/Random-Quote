

function generate() {

var quotes = ["Things work out best for those who make the best of how things work out.@John Wooden", "If you are not willing to risk the usual you will have to settle for the ordinary.@Jim Rohn", "Success is walking from failure to failure with no loss of enthusiasm.@Winston Churchill", "Great minds discuss ideas; average minds discuss events; small minds discuss people.@Eleanor Roosevelt", "I have not failed. I've just found 10,000 ways that won't work.@Thomas A. Edison", "If you're going through hell keep going.@Winston Churchill", "Don't be afraid to give up the good to go for the great.@John D. Rockefeller", "You must expect great things of yourself before you can do them.@Michael Jordan", "Our greatest fear should not be of failure but of succeeding at things in life that don't really matter.@Francis Chan"];

var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
var quoteAuthor = randomQuote.split("@");

var saying = document.getElementById('saying');
var author = document.getElementById('author');
console.log(saying);
saying.textContent = quoteAuthor[0];
author.textContent = quoteAuthor[1];

}

var button = document.getElementById('button');

button.addEventListener('click', function(e) {
  generate();
});
