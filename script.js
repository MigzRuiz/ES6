//Lecture 7: Arrays

const boxes = document.querySelectorAll(".box");

console.log(boxes);

//ES5
/*var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(current) {
    current.style.backgroundColor = "dodgerblue";
})*/

//ES6
const boxesArr6 = Array.from(boxes); //from transforms the nodeList to array
boxesArr6.forEach(current => current.style.backgroundColor = "dodgerBlue");

//Array.from(boxes).forEach(current => current.style.backgroundColor = "dodgerBlue");

//Loops
//ES6
for(const currentElement of boxesArr6){
    //continue or break can work here
    //if(currentElement.className === "box blue") {
    if(currentElement.className.includes("blue")){
        continue;
    } 
    currentElement.textContent = "I'm a barbie girl"
};

//ES5
var ages = [12, 17, 8, 18, 21, 11];

var fullAge = ages.map(function(currentElement) {
    return currentElement >= 18;
})

console.log(fullAge);
console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);

//ES6
console.log(ages.findIndex(currentElement => currentElement >= 18));
console.log(ages.find(currentElement => currentElement >= 18));