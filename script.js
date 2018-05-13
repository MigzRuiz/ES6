//Lecture 3: Strings
let firstName  = "John";
let lastName = "Smith";
const age = 23;

//ES6
//Now has template literals - you use backticks
console.log(`Hi ${firstname} ${lastName}. Nice to meet you.`);

//There are a few methods that we can use as well
const n = `${firstName} ${lastName}`;
console.log(n.startsWith("j")); //false
console.log(n.endsWith("th")); //true
console.log(n.includes(" ")); //true - checks if the string has that character
console.log(firstName.repeat(3)); //JohnJohnJohn
console.log(`${firstName} `.repeat(3)); //John John John