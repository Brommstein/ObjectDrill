'use strict';

let loaf = {
  flour: 300,
  water: 210,
  hydration(){return ((this.water/this.flour)*100);}
};

console.log(loaf);
console.log(loaf.hydration());

let five = {
  foo: 50,
  bar: 20,
  fum: 5,
  quux: 25,
  spam: 70
};

for (const property in five) {console.log(`${property}: ${five[property]}`);}

let some = {
  meals: ['breakfast', 'second breakfast', 'evelenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};

console.log(some.meals[3]);

let objOne = {name: 'Darius', job: 'Top', boss: false};
let objTwo = {name: 'Katarena', job: 'Mid', boss: false};
let objThree = {name: 'Jarvan', job: 'Jungle', boss: true};
let objFour = {name: 'Draven', job: 'Adc', boss: false};
let objFive = {name: 'Swain', job: 'Support', boss: false};

let team = [objOne, objTwo, objThree, objFour, objFive];

for (let i = 0; i < team.length; i++){
  if(team[i].boss === true){
    console.log(`${team[i].job} ${team[i].name} reports to nobody!`);
  } else {
    console.log(`${team[i].job} ${team[i].name} reports to ${team[2].name}!`);  
  }
}

const decodeCipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function decode(encodedWord) {
  let number = 0;
  let letter = encodedWord.charAt(0);
  for(const property in decodeCipher) {
    if(letter === `${property}`) {
      number = `${decodeCipher[property]}`;
    }
  }
  let encodedLetter = encodedWord.charAt(number);
  if(number === 0) {
    return ' ';
  } else {
    return encodedLetter;
  }
}

function decodeWord(string){
  let check = string.split(' ');
  let array = [];
  for (let i = 0; i < check.length; i++){
    array.push(check[i]);
  }
  for (let a = 0; a < array.length; a++){
    console.log(decode(array[a]));
  }
}

decodeWord('apply animal beyond creature tired hello!');