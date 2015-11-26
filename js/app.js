function generate() {

var quotes = ["Things work out best for those who make the best of how things work out.@John Wooden", "If you are not willing to risk the usual you will have to settle for the ordinary.@Jim Rohn", "Success is walking from failure to failure with no loss of enthusiasm.@Winston Churchill", "Great minds discuss ideas; average minds discuss events; small minds discuss people.@Eleanor Roosevelt", "I have not failed. I've just found 10,000 ways that won't work.@Thomas A. Edison", "If you're going through hell keep going.@Winston Churchill", "Don't be afraid to give up the good to go for the great.@John D. Rockefeller", "You must expect great things of yourself before you can do them.@Michael Jordan", "Our greatest fear should not be of failure but of succeeding at things in life that don't really matter.@Francis Chan"];

var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
var quoteAuthor = randomQuote.split("@");

var saying = document.getElementById('saying');
var author = document.getElementById('author');

saying.textContent = quoteAuthor[0];
author.textContent = quoteAuthor[1];

}

var button = document.getElementById('button');

button.addEventListener('onclick', function(e) {
  generate();
});

// $( document ).ready(function() {
// 	generate();
//
//   function generate(){
//     var quotes = ["There are two types of people in this world.  Those that enter a room and say 'Here I am!' and those that enter a room and say 'There you are!'.@Unknown","Because it's there.@George Mallory on climbing mountains","Footsteps always follow us, whenever it is snowing.  They always show us where we've been, but never where we're going.@Winnie the Pooh's A-Z","For I know the plans that I have for you.@The Lord, Jer 29:11","The only way to climb properly is to realize that just getting up a route is nothing, the way it is done is everything.@Royal Robbins","Small minds discuss people.  Average minds discuss events.  Great minds discuss ideas.@Unkown","The significant problems we face cannot be solved at the same level of thinking we were at when we created them.@Albert Einstein","We must not cease from exploration and the end of all our exploring will be to arrive where we began and to know the place for the first time.@T S Eliot","One man asked another on the death of a mutual friend, 'How much did he leave?' His friend responded, 'He left it all.'@Proverb","It is more noble to give yourself completely to one individual than to labor diligently for the salvation of the masses.@Dag Hammarskjold, Sec. Gen. of the UN","Maps are a way of organizing wonder.@Edward Tufte","I have decided to make my life my argument.@Albert Schweitzer","Now it's a sqirt mecca for mystery artist, but back then it was just magic.@Jim Snyder on Kayaking","Knowledge keeps about as well as fish.@Alfred North Whitehead","It all began, I said, when I decided that some experts don't really know enough to make a pronouncement of doom on a human being.  And I said I hoped they would be careful about what they said to others; they might be believed and that coud be the beginning of the end.@Norman Cousins, Anatomy of an Illness","Do not go gentle into that good night.  Rage, rage against the dying of the light.@Dylan Thomas","For you will look smart and feel ignorant and the patient will not know which day it is for you and you will pretend to be smart out of ignorance.@John Stone, Gaudeamus Igitur"
// ];
//
//
// 		randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
//     quoteAuthor=randomQuote.split("@");
// 		$('.saying').text(quoteAuthor[0]);
//     $('.author').text(quoteAuthor[1]);
//   }
//
//
// $(".button").on( "click", function() {
//     generate();
// });
//
// });
