//Lecture 1: Let and Const
/*
//ES5
var name5 = "John Smith";
var age5 = 23;
name5 = "John Bravo";

console.log(name5);

//ES6
//const = values that we don't want to change
//let = is like the old var

const name6 = "Jane Doe";
let age = 23;
name6 = "Jane Miller";
console.log(name6);
*/

//var is FUNCTION SCOPE
//let and const are BLOCK SCOPE

//ES5
function driversLicense5(passedTest){
    if (passedTest) {
        var firstName = "john";
        var birthYear = 1990;

        //console.log(firstName + " " + birthYear);
    }
    console.log(firstName + " " + birthYear);
}
driversLicense5(true);

//ES6
function driversLicense6(passedTest){
    let firstName;
    const birthYear = 1990;

    if (passedTest) {
        firstName = "john";

        //console.log(firstName + " " + birthYear);
    }
    console.log(firstName + " " + birthYear);
}
driversLicense6(true);

//Another example to show ES6 let and const are BLOCK scopes
//The 2 i's are different from one another.

let i = 23;

for(let i = 0; i < 5; i++){
    console.log(i);
}

console.log(i);