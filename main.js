// i have written some code in js practie about how to use query selectors and id selectors and  create events

const ul = document.querySelector('.items');
      ul.firstElementChild.textContent= 'Hello s';
      ul.lastElementChild.innerHTML = 'how are you';   

   const btn = document.querySelector('.btn');

    btn.addEventListener('click', (e) =>{
        e.preventDefault();
            console.log(e.target.className);
    });   

      btn.addEventListener('mouseover', e => {
        e.preventDefault();
        console.log(e.target.className);
        document.getElementById('my-form').style.background = '#ccc'; changes background of form to #ccc
        document.querySelector('body').classList.add('bg-dark');  // changes background color of form to bg-dark
        ul.lastElementChild.innerHTML = '<h1>Changed</h1>';       // changes text to changed value
    });  
    
        btn.addEventListener('mouseout', e => {
        e.preventDefault();
        console.log(e.target.className);
        document.getElementById('my-form').style.background = '#ccc';
        document.querySelector('body').classList.add('bg-dark');
        ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
    });  


   const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
} 
