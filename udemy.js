/*
const hasDriverLicence = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasGoodVision);

const shouldDrive = hasDriverLicence && hasGoodVision ;

if (hasDriverLicence && hasGoodVision && !isTired ) {
  console.log('you should drive');
  
} else {
  console.log('someone else shoould drive')
}


const koalasPoints = 98;
const tigersPoints = 99;

if (koalasPoints === tigersPoints && koalasPoints <= 100 && tigersPoints <= 100 ) {
  console.log('nobody wins')
}



let toDoListDays = 'monday';

switch (toDoListDays) {
  case 'monday':
    console.log('create a poem')
    break;
  
  case 'tuesday' :
    console.log('create a music song')

    break;

  default:
    console.log('it\'s a free day, just rest')
    break;
}

*/
/*

let day = 2;

if (day === 'friday') {
  console.log('plan course structure');
  console.log('go to coding meetup');
  
} else if (day === 'tuesday'){
  console.log('create a song')
} else if (day === 'friday' || day === 'saturday') {
  console.log('its  a free day ')
} else if (typeof day != Number && typeof day !== String) {
  console.log('please enter just letters refering to the weeekdays')
  
}



let a = 20;
let b = 30;

if (a > b) {
   c = 'happy new year';
  
} else if ( a < b) {
   c = 'merry christmas'
}

console.log(c);



const age = 12;

age >= 18 ? console.log('you are an adult'):
console.log('you are not an adult');

age === 12 ? console.log('you are allowed to drive'): console.log('go back')

console.log(` i am a child and i drnk ${age >= 18 ? 'wine' : 'water' }`)



let totalBill = 275;
if (totalBill < 300 && totalBill > 50 || totalBill === 300 ||  totalBill === 50) {
  tip = totalBill * 20 / 100
} else {
  tip = totalBill * 15 / 100
}

console.log()



function findLargest(numbers) {
  if (numbers.length === 0) {
    return 'the array is empty'
  }
  const largestNumber = Math.max(...numbers)

  return largestNumber;

}


console.log(findLargest(numbers = [ 2, 45 , 6]))



console.log('9' - '5'); // -> ?
console.log('19' - '13' + '17'); // -> ?
console.log('19' - '13' + 17); // -> ?
console.log('723' < "57"); // -> ?
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?



'use strict';
 
function sentece() {
  console.log('my name is mike')
}

sentece();



function fruits(orange, grapes){
  console.log(orange, grapes)
  const juice = `a juice with ${orange} oranges and ${grapes} grapes is tasty`
  return juice;
}
const mixedJuice = fruits(3, 2)
console.log(mixedJuice)


// function declaration
function year(currentYear) {
  const yearNow = 1997 - currentYear;
  return yearNow;
}
// function expression
const age2 = function (currentYear) {
  return 1997 - currentYear
}

console.log(year(1995), age2(1995))



const age1 = year(2024);

function year(randomYear){
  return 2020 - randomYear
}



const age2 = function (randomYear){
  return 2020 - randomYear
}

const age3 = age2(2024);

console.log(age1, age3);


function year(actuaalYear){
  return 2 - actuaalYear
}
const age1 = year(1);
// arrow finction no need of curly brackets
const age3 = actuaalYear => 2025 - actuaalYear;
const age4 = age3(1);

console.log(age4)



const year = randomyear => 2037 - randomyear;
const randomYearCreated = year(1991);
console.log(randomYearCreated);

const leftYearsretirment = randomYear => {
  const age = 2037 - randomYear;
  const retirement = 65 - age;
  return retirement;
}
console.log(leftYearsretirment(1991));



const cutPieces = function (fruit) {
  return fruit * 4
}

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `juice with ${applePieces} pieces of apple and  ${orangePieces}
  pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2,3));



const calcAge = function (birthYear){
  return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName){
  const age =   calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} is left ${retirement} years for retirment`)
    return retirement
    
  }else {
    console.log(`${firstName} is already retired`)
    return -1
  }
}

console.log(yearsUntilRetirement(1991, 'andrew'))
console.log(yearsUntilRetirement(1940, 'Robert'))

*/

//const calcAverage = (a, b, c) => (a + b + c) / 3;

// data 1
/*
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avDolphins, avKoalas) {
  if (avDolphins >= 2 * avKoalas) /* is greater or equals two times the value of 
  avKoalas */ /*{
    console.log(`dolphis wins (${avDolphins} vs ${avKoalas})`)
    
  }else if (avKoalas >= 2 * avDolphins) {
    console.log(`koalas wins (${avKoalas} vs ${avDolphins})`)
    
  } else {
    console.log('no winner this time.')
  }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(111, 555);

scoreDolphins = calcAverage(44, 23, 71);
scoreKoalas = calcAverage(65, 54, 49);



//const friends = ['peter', 'max', 'andrew']


const friends = new Array('peter', 'max', 'andrew')
console.log(friends[friends.length - 4])

friends[2] = 'rod';
console.log(friends)
const firstName = 'jonas'
const personId = [firstName, 'roberts', 20 + 35 , 'teacher', friends]
console.log(personId)



const calcAge = function (birthYear){
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010,2018];
const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])

console.log(age1, age2, age3)



const friends = ['peter', 'max', 'andrew']
 console.log(friends.push('jay'))
 friends.unshift('steve')
 console.log(friends)
 console.log(friends.indexOf('peter'))
 console.log(friends.includes('peter' && 'max'))


function calcTip (totalBill){
  if (totalBill >= 50 && totalBill <= 300 ) {
    console.log ((totalBill / 100  ) * 15) ; 
  }else if (totalBill < 50 || totalBill > 300) {
    console.log((totalBill / 100) * 20)
    
  }
}

calcTip(100)

 

const calcTip = function(bill){
  return bill >= 50 && bill <= 300 ? bill * 0.15 :
  bill * 0.2;
}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips)
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(totals)



// objects 

const readlineSync = require('readline-sync');

  const personalInfo = {
    firstName: 'Jonas',
    lastName: 'Vargas',
    age: 25,
    occupation: 'software dev.',
    friends : ['andrew', 'thomas', 'michael'],
    currentYear: 2024,
    hasDriverLicence: false,

    calcAgeInMaryland: function (){
      console.log(this)
      return 1930 - this.currentYear
      // this referes to the object name  
      

    },
    someJonasInfo: function(){
      if (this.hasDriverLicence ) {
        console.log(`${personalInfo.firstName} is a ${personalInfo.age} old teacher, and he has driver licence `)
         
        
      } else{
        console.log(`${this.firstName} is a ${personalInfo.age}
         old teacher, and he has not driver licence `)

      }

    }


  };

console.log(personalInfo.firstName + ' has ' + personalInfo.friends.length + 
' friends, and his best friend is  ' + personalInfo.friends[2]   )

//c/onsole.log(personalInfo.calcAgeInMaryland(2024))
//console.log(personalInfo.calcAgeInMaryland())
//console.log(`${personalInfo.firstName} is a ${personalInfo.age} old teacher, and `)

personalInfo.someJonasInfo();




const jhon = {
    
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  bmi: Function calcBMI(){
      return mass / (height * height)
  }
}
 
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  
}



const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function(){
    this.bmi = this.mass / (this.height ** 2)
    return this.bmi

  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function(){
    this.bmi = this.mass / (this.height ** 2)
    return this.bmi

  }
};

john.calcBMI();
mark.calcBMI();

console.log(john.bmi)
console.log(mark.bmi)


// loop - multiple repetitions

for (let rep = 1; rep <= 10 ; rep = rep + 2){
  console.log(`'you need to make 10 repetitions ${rep}'`)
}
*/
/* 
const jonas = [
  'Jonas Smith',
  1950 - 1920,
  'Soccer Player',
  'chess',
  ['robert', 'andrew', 'Tom']
]

const types = []


for(let i = 0; i < jonas.length ; i++){ // jonas.length === the number in the loop 5
  console.log(jonas[i], typeof jonas)// an array is in fact an object but is still an array 
  types[i] =  jonas[i]
  types.push = jonas[i]
}
console.log(types)


const jonas = [
  'Jonas Smith',
  1950 - 1920,
  'Soccer Player',
  'chess',
  ['robert', 'andrew', 'Tom']
]

for(let i = 0; i < jonas.length ; i++){
  if (typeof jonas[i] !== 'boolean') continue; 
  console.log(jonas[i])

}


const years = [1980, 1960, 1940, 1923]
const ages = []

for( let i = 0 ; i < years.length; i++ ){
 
  ages.push (2037 - years[i]) //  ages[i] = 2037 - years[i];
}

console.log(ages)

 // creating a loop inside another loop 
const jonas = [
  'jonas',
  'Vargas',
  26,
'soccer player',
['robert', 'andrew', 'michelson'],
true

]

for(let i = jonas.length - 1; i >= 0; i--){
  console.log(i, jonas[i]);
}


for (let exercise = 1; exercise < 4; exercise++){
  console.log(`-------- exercise begining ---- ${exercise}`)

  for(let rep = 1;  rep < 5 ; rep++){
    console.log(`exercise  ${exercise} : repetion number ${rep}`)
  }
}
// while  loop 



for(let i = 1; i <= 10 ; i++){
  console.log(`lifting weigths${i}`)
}

let i = 1;

while (i <= 10 ){ // condition needs to be true to keep running 
  console.log(`lifting weigths hiptro ${i}`);
  i++;

}


let dice = Math.random() * 6
console.log(dice)

//while( dice !== 6){
  //console.log(`this is a ${dice}`);
//}

if (dice === 6) {
  console.log(`you got a ${dice}`)

  
  
}

*/
'use strict';
// Your strict mode JavaScript code here

/* step for developing a js enviirment 
1. activate the strict mode 
2. enable prttier to show how a styling and readability in the code.
3. configure the preferences in the setting 
4. actiavte live server
*/
/* 
// 1 undesrtand the problem : create a thermother that can calculate the temperature incresase
// 2.breaking up the problem: we need a program that takes the data from the array and then calculate the difference
// we need to to take into account the clean code

// 3. possible slutions : we can create a system that take into account the previous value and wheter increse or declares pritns evrything at once
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

for (let i = 1; i < temperatures.length; i++) {
  if (temperatures[i] > temperatures[i - 1]) {
    console.log(
      `The temperature increased by ${
        temperatures[i] - temperatures[i - 1]
      } °C, from ${temperatures[i - 1]} to ${temperatures[i]}`
    );
  } else if (temperatures[i] < temperatures[i - 1]) {
    console.log(
      `The temperature decreased by ${
        temperatures[i - 1] - temperatures[i]
      } °C, from ${temperatures[i - 1]} to ${temperatures[i]}`
    );
  } else if (temperatures[i] === 'error') {
    console.log('System rebooted, please restart the thermometer');
  }
}

console.log(
  'TEH  HIGHEST TEMPERATURE RECORDED WAS : ' + Math.max(temperatures)
);

// WHAT IS THE TEMPERATURE AMPLITUDE : THE DIFFERENCE BETWEEN THE ARRAY DATA
// HOW TO COMPUTE MAX AND MIN TEMPERATURE
// HOW DOES AN ERROR LOOK LIKE AND WHAT TO DO WHEN OCCUR
*/
const mesureKelvin = function () {
  const measurement = {
    type: 1,
  };
};
