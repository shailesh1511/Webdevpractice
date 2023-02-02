/* 
console.log(document.URL);

console.log(document.title);
console.log(document.doctype);

console.log(document.head);
console.log(document.body);
//console.log(document.all);

console.log(document.forms);
console.log(document.links); */

//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');

//console.log(header);
//console.log(header.textContent);
//header.innerHTML ='<h3>Hello</h3>';

//header.style.borderBottom = 'solid 3px #000';   
/* var addI = document.getElementsByClassName('title');
console.log(addI);
addI[0].style.fontWeight = 'bold';
addI[0].style.color = 'green';


//addI.style.fontFamily = 'bold';
//addI.style.color = 'green';

//---QuerySelector -- queryselector will grab the first element or tag which we have selected --
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px black';

//here querselector will select the first input tag 
var ip = document.querySelector('input');
ip.value = 'Hello World';

//this will select input tag with input type  submit
var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item  = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem  = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'green';

var secondItem  = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'blue';  */

// QuerySelector
var titles = document.querySelectorAll('.title');
console.log(titles);

titles[1].textContent = 'Hello';

/* for odd children
var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i= 0; i < odd.length; i++)
{
    odd[i].style.backgroundColor = "#f4f4f4";
}   */

var even = document.querySelectorAll('li:nth-child(even)');

for(var i= 0; i < even.length; i++)
{
    even[i].style.backgroundColor = "#ccc";
} 
