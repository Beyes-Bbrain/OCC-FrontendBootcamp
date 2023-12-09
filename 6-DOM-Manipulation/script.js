// Accessing Elements
//by ID 
const heading = document.getElementById('heading');

// console.log(heading);

// by class 
// const heading = document.getElementsByClassName('heading1');
// console.log((heading));

// // by tag name
// const heading = document.getElementsByTagName('h1');
console.log(heading);

const listItems = document.querySelectorAll('#list li');

console.log(listItems);

//Modifying Elements
//contents using innerHTML
heading.innerHTML ="Learning DOM Manipulation";

//contents using textContent
heading.textContent = "All About DOM Manipulation ";

//attributes using setAttribute
heading.setAttribute('class','hightlight');

//styles using the style property
const button = document.getElementById('btn');
button.style.backgroundColor = 'blue';
button.style.color ='white';

//Creating new elements dynamically
const newParagraph = document.createElement('p');
newParagraph.textContent ="This is a new paragraph.";

document.querySelector('.container').appendChild(newParagraph);




