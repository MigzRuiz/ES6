//Lecture 9: Rest Parameters

//ES5
function isFullAge5(){
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(currentElement) {
        console.log((2018 - currentElement) >= 18);
    });
}

isFullAge5(1995,2010,1998);

//ES6
function isFullAge6(limit, ...years){
    //console.log(years); //Gonna produce an array out of all the elements

    years.forEach(currentElement => {
        console.log((2018 - currentElement) >= limit);
    });
}

isFullAge6(18,1995,2010,1998);