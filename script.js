//Lecture 4: Arrow Functions

const years = [1992,1994,2012,2009,2007];

//ES5
var age5 = years.map(function(el){
    return 2018 - el;
});

console.log(age5);

//ES6
let age6 = years.map(el => `Age: ${2018-el}` );
console.log(age6);

//Return is implicit
age6 = years.map((el, index) => `Age ${index + 1}: ${2018-el}`);
console.log(age6);

age6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    age = now - el;

    return `Age ${index + 1}: ${age}`;
});
console.log(age6);