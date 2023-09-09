/* Pseudocode for 

assume 5 x 5 grid

create 5 divs for each row

  create 5 child items for each row giving you the 5x5 grid
  







*/





// Etch a sketch project here
// const container = document.querySelector('#container');

// const div = document.createElement('div');
// creates a new div referenced in the variable 'div'

const easContainer = document.querySelector('#easContainer');


let numOfRows = 10;

let arrayDiv = new Array();
for (let i = 0; i < numOfRows; i++) {
  arrayDiv[i] = document.createElement('div');
  arrayDiv[i].id = 'row' + i;
  // arrayDiv[i].style.backgroundColor = 'white';
  arrayDiv[i].className = 'row' + i;

  arrayDiv[i].className = 'rowStyle';

  document.body.appendChild(arrayDiv[i]);
}

let numOfColumns = 10;

let arrayDivChild = new Array();
for (let j = 0; j < numOfRows; j++) {
  for (let i = 0; i < numOfColumns; i++) {
    arrayDivChild[i] = document.createElement('div');
    arrayDivChild[i].id = 'column' + j;
    // arrayDivChild[i].style.backgroundColor = 'orange';
    arrayDivChild[i].className = 'column' + i;

    arrayDivChild[i].className = 'tileStyle';

    // arrayDivChild[i].className = 'columnStyle';

    document.querySelector(`#row${i}`).appendChild(arrayDivChild[i]);

    // console.log(document.querySelector(`#row${i}`));
  }
}

// const nodeList = document.body.childNodes;
