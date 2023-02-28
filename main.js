const btn = document.querySelector('.btn');

// addEventListener takes two inputs...the event and the function you want to run when the button is clicked

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
//     document.querySelector('.items').lastElementChild.style.color = 'black';
// });

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
//     document.querySelector('.items').lastElementChild.style.color = 'black';
// });


btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
    document.querySelector('.items').lastElementChild.style.color = 'black';
});