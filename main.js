// Functions 
// NO ARROW FUNCTIONS

function addNums(num1, num2) {
    console.log(num1 + num2);
}

// Now we call the function with params
addNums(3, 2);

function addNumsDefaultVals(num1 = 1, num2 = 2) {
    console.log(num1 + num2);
}

addNumsDefaultVals();


// Normally we don't console log functions, we will return...
function addNumsReturn(num1, num2) {
    return num1 + num2;
}

console.log(addNumsReturn(3, 3));

// WITH ARROW FUNCTIONS
const addNumsArrow = (num1, num2) => {
    console.log(num1 + num2);
}

addNumsArrow(10, 11);