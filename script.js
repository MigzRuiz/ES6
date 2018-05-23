//Lecture 8: Spread Operator

function addFour(a, b, c, d) {
    return a + b + c + d;
}

//ES5
var sum1 = addFour(10,3,2,2);
console.log(sum1);

var arr = [10,3,2,2];
var sum2 = addFour.apply(null, arr);
console.log(sum2);

//ES6
const sum3 = addFour(...arr);
console.log(sum3);

//Another example
const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h,...boxes];

Array.from(all).forEach(currentElement => currentElement.style.color = "orange");
