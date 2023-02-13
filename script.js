'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating new variable with same name as outer scope's variable
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';
    }
    // console.log(str);
    console.log(millenial);

    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

var firstName = 'Matilda';
calcAge(1991);

// console.log(age);
// printAge();

// Temporal Dead Zone example
/*
const myName = 'Bob';

if (myName === 'Bob') {
  console.log(`Bob is a ${job}`);
  const age = 2037 - 1989;
  console.log(age);
  const job = 'teacher';
  console.log(x);
}
*/

// Variables hoisting
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Lucian';
let job = 'teacher';
const year = 1991;

// Functions Hoisting
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// this keyword examples
console.log(this);

const calcAge1 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge1(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

// const lucian = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// lucian.calcAge();

const matilda = {
  year: 2017,
};

// matilda.calcAge = lucian.calcAge;
// matilda.calcAge();

// Doesn't work on normal function call
// const f = lucian.calcAge;
// f();

const lucian = {
  firstName: 'Lucian',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // self or that
    //     const self = this;

    //     const isMillenial = function () {
    //       console.log(self);
    //       console.log(self.year >= 1981 && self.year <= 1996);
    //     };
    //     isMillenial();
    //   },

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

lucian.greet();
lucian.calcAge();

const addExprt = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExprt(2, 5);
addExprt(2, 5, 8, 12);

var AddArrows = (a, b) => {
  // no arguments in arrow functions
  //   console.log(arguments);
  return a + b;
};

AddArrows(2, 5, 8);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Lucian',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friends: ', friend.age);
console.log('Me: ', me.age);

// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName);
console.log(oldLastName);

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage ', jessica);
console.log('After marriage ', marriedJessica);

// marriedJessica = {};

// Copying
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log('Before marriage ', jessica2);
console.log('After marriage ', jessicaCopy);
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage ', jessica2);
console.log('After marriage ', jessicaCopy);
