//Lecture 7: Arrays

const boxes = document.querySelectorAll(".box");

console.log(boxes);

//ES5
/*var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(current) {
    current.style.backgroundColor = "dodgerblue";
})*/

//ES6
var boxesArr6 = Array.from(boxes);
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
