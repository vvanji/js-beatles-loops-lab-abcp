function theBeatlesPlay(musicians, instruments){
var text = [];
for (var m = 0; m < musicians.length; m++) {
    text.push(`${musicians[m]} plays ${instruments[m]}`);
} 
return text;
}

theBeatlesPlay('John Lennon', 'Guitar');

function johnLennonFacts(facts){
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var i = 0;
var newFacts = [];
while (i < facts.length){
   newFacts.push(facts[i] + "!!!");
   i++;
  }
  return newFacts;
} 

johnLennonFacts();


function iLoveTheBeatles(number) {
    var text = [];
    do {
        text.push("I love the Beatles!");
        number++;
    } while (number < 15);

    return text;
}

iLoveTheBeatles(7);