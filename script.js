//Lecture 6: Destructuring

//ES5
var john = ["John",25];
var name5 = john[0];
var age5 = john[1];

//ES6
const [name, age] = ["John", 25];

console.log(name);
console.log(age);

//You can use destructuring on objects too
const personObj = {
    firstName: "Pedro",
    lastName: "Sandisk"
};

const { firstName, lastName } = personObj;

console.log(firstName);
console.log(lastName);

const { firstName: a, lastName: b } = personObj;

console.log(a);
console.log(b);

//Practical example using functions
//Let's say we want to get the age and retirement years based on the year

function calcRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcRetirement(1995);
console.log(`Age is ${age2} and retires at ${retirement}`);

