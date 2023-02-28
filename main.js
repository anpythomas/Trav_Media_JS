// Single Element
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('h1'));

// Multiple Elements

// Newest and preffered method
console.log(document.querySelectorAll('.item'));

// These two are older less efficient ways
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));