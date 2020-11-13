/* eslint-disable no-console */
'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

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

decodeWord('Check to see if this works with apples, banananas, chaples, and alphabets.');

function createCharacter(name, nickname, race, origin, attack, defense){
  if(!name || !nickname || !race || !origin || !attack || !defense){
    throw new TypeError('Missing needed info!');
  }
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function(){console.log(`${name} is a(n) ${race} from ${origin}.`);},
    evaluateFight: function(character){
      let x = 0;
      let y = 0;
      if (this.attack > character.defense){
        x = this.attack - character.defense;
      }
      if (this.defense < character.attack){
        y = character.attack - this.defense;
      }
      return `Your opponent takes ${x} damage and you receive ${y} damage.`;
    }
  };
}

let characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins','bilbo','Hobbit','The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 7, 10));

console.log(characters);

let found = characters.find(function(characters){
  return characters.nickname === 'aragorn';
});

console.log(found.describe(this.name, this.race, this.origin));

let bestRace = characters.filter(function(characters){
  return characters.race === 'Hobbit';
});

console.log(bestRace);

let strongest = characters.filter(function(characters){
  return characters.attack > 5;
});

console.log(strongest);