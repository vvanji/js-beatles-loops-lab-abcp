function theBeatlesPlay(musicians, instruments){
var text = [];
for (var m = 0; m < musicians.length; m++) {
    text.push(`${musicians[m]} plays ${instruments[m]}`);
} 
return text;
}

theBeatlesPlay('John Lennon', 'Guitar');

function johnLennonFacts(){
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var i = 0;
var newFacts = [];
while (i < facts.length){
   newFacts.push(`${facts[i]} !!!`);
   i++;
  }
  return newFacts;
} 

johnLennonFacts();