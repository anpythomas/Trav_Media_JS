// Turnary Operator - if statments with less code

const x = 0;

// if x > 10 then set color to red... else set color to blue
// ? = "then"
// ":" = "else"
const color = x > 10 ? 'red' : 'blue';

console.log(color);

// Switches

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}