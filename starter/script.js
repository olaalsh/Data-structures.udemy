'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};
/*
//spread . because on right side of =
const arr = [1, 2, ...[3, 4]];
//REST, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

const [pizz, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

//Objects
const { sat, ...weekdays } = requestIdleCallback.openingHours;
// 2)functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

//use any data type ,return any data type, short circuiting
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
//Nullish : null and undefined (not 0 or ' ')
const guestCorrect = restaurant.numGuests ?? 10;

const rest1 = {
  namr: 'ola',
  numGests: 20,
};
const rest2 = {
  name: 'faris',
  owner: 'fatih',
};

//rest1.numGuests=rest1.numGuests ||10;
//rest2.numGuests=rest2.numGuests ||10;
rest1.numGests ||= 10;

//nulish assigment operator (null or undefined)
rest1.numGests ??= 10;


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
// Coding Challenge #1
*/
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players.
 For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name,
  and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players.
 So create a new array ('players1Final') 
 containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 
'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names
 (NOT an array) and prints each of them to the console,
  along with the number of goals that were scored in total 
  (number of player names passed in)
7. The team with the lower odd is more likely to win. 
Print to the console which team is more likely to win,
 WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored

GOOD LUCK 😀

const [player1, player2] = game.players;

const [gk, ...fieldPlayers] = player1;

const allPlayers = [...player1, ...player2];

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

const {
    odds: { team1, x: draw, team2 },
} = game;
const printGoals = function(...players) {
    console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);
team1 < team2 && console.log('team2 is winner');
team1 > team2 && console.log('Team 2 is more likely to win');
*/
//FOR OF LOOP
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menu) console.log(item);
// arry şeklinde getirmek istiyorsam
//for (const item of menu.entries()) {
//  console.log(`${item[0] + 1}:${item[1]}`);
for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}:${el}`);
}
/*
//es6 enhanced object literals
const hours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};
hours,


const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 12,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
};

//optıonal chaining (.?)
if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);
//with optional chaining
console.log(restaurant.openingHours.mon ?.open);
//example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    const open = restaurant.openingHours[day] ?.open ?? 'closed';
    console.log(`on${day},we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.orderRis?.(0, 1) ?? 'methods does not exist');

//ARRAYS
const users = [];
console.log(users[0]?.name ?? 'user array empty');
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');


// looping objects:object keys, values, and entries
//Property Names
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `we are open on ${properties.length} days: `;
for (const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr);
//Property VALUES
const values = Object.values(openingHours);
//entire object
const entirs = Object.entries(openingHours);

for (const [key, { open }] of entirs) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
//CODİNG CHALLENGE #2
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
(We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
 (except for "draw"). HINT:
  Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players
 who scored as properties, and the number of goals as the value. 
 In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
//1

for (const [i, player] of game.scored.entries())
    console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}
//4
const scorers = {};
for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

//SETS
const orderSet = new setInterval([
    'pasta',
    'pizza',
    'pizza',
    'risotto',
    'pastsa',
    'pizza',
]);
console.log(orderSet); // bütü tekrarlar kaldırılıcak ekrana yazdırınca
console.log(new Set('ola')); // it's spell my name
console.log(orderSet.size);
console.log(orderSet.has('pizza')); // yani verilen nesneler içinde pizza var mı?
orderSet.add('garlic bread'); //eleman eklemek
orderSet.delete('risotto'); //eleman silmek
//orderSet.clear(); herşey siliyor
for (const order of orderSet) console.log(order);
//example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
//const staffUnique = new set(staff); // tekrarlanan nesneler ortadan kaldırıyor-- arry şeklinde yazdırmak istesem
const staffUnique = [...new set(staff)];
//how many possition there ara ?
console.log(
    new set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);

// how many diffrent letters in string
console.log(new set('ola').size);

//MAPS
const rest = new Map();
rest.set('name', 'classico italiano');
rest.set(1, 'firenze', 'italy');

rest
    .set('catagories', ['italian', 'pizzeria', 'vegetarian', 'organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'we are open')
    .set(false, 'we are closed');
console.log(rest.get('name'));
console.log(rest.get(true));
const time = 22;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));

//rest.clear();
const arr = [1, 2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1', 'heading'));
console.log(rest.get(arr));
rest.delete(2);
console.log(rest.size);

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
]);
console.log(question); // it is ame entries (openingHours)
//const hoursMap = new Map(Object.entries(openingHours));
//console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`answer ${key}:${value}`);
}
const answer = Number(prompt('your answe'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//map to array
console.log(...question);

*/
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events 
that happened during the game. The values are the events themselves, and the keys are the minutes in
 which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, 
every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, 
marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀


const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);
const event = [...new Set(gameEvents.values())];
console.log(event);
gameEvents.delete(64);
//"An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
    `An event happened,on o average, every ${90 / gameEvents.size} minutes `
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
    `An event happened, on average, every ${time / gameEvents.size} minutes`
);
//[FIRST HALF] 17: ⚽️ GOAL
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}
*/
//STRİNGS
const airline = 'TAP AİR PORTUGAL';
/*
const plane = 'A32';
console.log(plane[0]); // çıkış A verir
console.log('B737' [0]); //çıkış B verir
console.log(airline.indexOf('r')); // çıkış 6 verir
console.log(airline.lastIndexOf('r')); // son R herfi yeri söyler yanı çıkış 10
console.log(airline.slice(4)); // çıkiş air portugal
console.log(airline.slice(4, 7)); //çıkış air
console.log(airline.slice(0, airline.indexOf(' '))); // çıkış TAP
console.log(airline.slice(airline.lastIndexOf('') + 1)); //çıkış portugal
console.log(airline.slice(-2)); // cümlenin son iki harfi verir yanı çıkış "AL"
console.log(airline.slice(1, -1)); // cümlenin ilk harfi silenir ve son harfi de silinir yani çıkış AP AİR PORTUGA
const checkMiddleSeat = function(seat) {
    // B AND E ARE MİDDLE SEATS
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('you got the middle seat');
    else console.log('you got lucky'); 
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.clear(airline.toUpperCase());

//fix capitalization in name
const passenger = 'MOHAmmed Fatih';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // ilk harfı büyük yapar yani çikiş Mohammed fatih olacak.
//comparing emails
const email = 'helloQola.io';
const loginEmail = 'Hello@Ola.IO';
/*
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// iikinci yol
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);
const announcement = 'All passengers come to barding door 23. boarding door23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate')); // replaceAll metodu kullanmadan bu yolu izleyebiliriz
// yani çıkış artık bulunan her door yerine gate yazılacak.

// Booleans
const plane = 'A320neo';
console.log(plane.includes('A320')); //true
console.log(plane.includes('boeing')); //false
console.log(plane.startsWith('Air')); //false

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('part of the NEW ARirbus family');
}
//practice exercies
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('you are NOT allowed on board');
    } else {
        console.log('welcome aboard!');
    }
};

checkBaggage('ı jave a laptop,some food and a pocket knife');
checkBaggage('socks and camera');
checkBaggage('got some snacks and a gun for protection');

//split and join
console.log('a+very+nice+string'.split('+'));
console.log('ola alshikh'.split(' '));

const [firstName, lasName] = 'ola alshikh'.split('  ');

//const newName = ['Mr.', firstName, lasName.toUpperCase()].join(' ');
//console.log(newName); // çıkış ola alshikh olacak

const capitalizeName = function(name) {
    const names = name.split(' ');
    const namesUpper = [];
    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1)); çıkış isimlerin ve soy isimların baş harfi büyük olacak
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('ola alshikh');

//padding
const message = 'go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('ola'.padStart(25, '+'));

const maskCreditCard = function(number) {
    const str = number + ' ';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};
console.log(maskCreditCard(12351478161531));
console.log(maskCreditCard('231561485145151561561'));

//repeat

const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function(n) {
    console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
// çıkış There are 5 planes in line 🛩🛩🛩🛩🛩
//There are 3 planes in line 🛩🛩🛩
//There are 12 planes in line 🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩
*/
//challenge #4
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to
 camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will 
happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable 
name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck.
 Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function() {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');

        const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});
*/
const flights1 =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights1.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )}${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
    console.log(output);
}