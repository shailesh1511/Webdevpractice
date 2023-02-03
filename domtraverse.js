// Traversing the dom

var itemList = document.querySelector('#items');
/* // parent Node 
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode); */

/*   //parent element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'green';
console.log(itemList.parentElement.parentElement);  */
/*
//  child Nodes 
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'blue';

//firstChild --> it also consider the line breakes and spaces ,, always use firstElementChild 
//console.log(itemList.firstChild);

//firstElementChild
console.log(items.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';  

//lastChild
//console.log(itemList.lastChild);

//lastElemtChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4'; 

//nextSibling
//console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling); 

//previousSibling
//console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green'; */

// create element

// create div

var newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';
// add ID
newDiv.id = 'hello1';

// add attribute
newDiv.setAttribute('title', 'Hello Div');
// create text node
var newDivText = document.createTextNode('Hello World');
//add text to div
newDiv.appendChild(newDivText); 

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);























