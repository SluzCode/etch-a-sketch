const container = document.querySelector('#container');

const div = document.createElement('div');
// creates a new div referenced in the variable 'div'

/*

create 







*/





// Etch a sketch project here

const easContainer = document.querySelector('#easContainer');


// let numOfWindows = 3;

// let arrayDiv = new Array();
// for (let i = 0; i < numOfWindows; i++) {
//     arrayDiv[i] = document.createElement('div');
//     arrayDiv[i].id = 'block' + i;
//     arrayDiv[i].style.backgroundColor = 'green';
//     arrayDiv[i].className = 'block' + i;

//     arrayDiv[i].className = 'bordered';

//     document.body.appendChild(arrayDiv[i]);
// }





// End of Etch a sketch code



// div.style.color = 'blue';
// adds the indicated style rule

// div.style.border = "5px solid white"

div.style.cssText = 'color:black; background: pink; border: 5px dotted green';
// adds several style rules

// div.setAttribute('style', 'color: blue; background: lightgray;');
// adds several style rules

// div.textContent = 'This is the glorious text-content!'                               
// creates a text node containing "Hello World!" and
// inserts it in div

const header1 = document.createElement('h1');

div.appendChild(header1);

header1.textContent = "I'm the h1 element!"

const innerPara = document.createElement('p');

innerPara.textContent = "I'm the <p> that comes after";

div.appendChild(innerPara)

container.appendChild(div);

// Exercises


// const para = document.createElement('p');

// para.textContent = "Hey I'm Red";

// para.style.color = 'red'

// container.appendChild(para);


// const header3 = document.createElement('h1');

// header3.textContent = "Hey I'm Red";

// header3.style.color = 'blue'

// container.appendChild(header3);


const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

// the JavaScript file




const btn2 = document.querySelector('#btn2');


btn2.addEventListener('click', function (e) {
    console.log(e);
  });



btn2.addEventListener('click', function (e) {
    console.log(e.target);
  });

  btn2.addEventListener('click', function (e) {
    e.target.style.background = 'lightblue';
  });


  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });

  button.addEventListener('click', function (e) {
    console.log(e.target);
  });

  button.addEventListener('click', function (e) {
    e.target.style.background = 'lightblue';
  });
});