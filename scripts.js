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


function generateGrid(numOfRows, numOfColumns) {

  // let numOfRows = 10;

  easContainer.innerHTML = "";

  let arrayDiv = new Array();
  for (let i = 0; i < numOfRows; i++) {
    arrayDiv[i] = document.createElement('div');
    arrayDiv[i].id = 'row' + i;
    // arrayDiv[i].style.backgroundColor = 'white';
    arrayDiv[i].className = 'row' + i;

    arrayDiv[i].className = 'rowStyle';

    easContainer.appendChild(arrayDiv[i]);
  }

  // let numOfColumns = 10;

  let arrayDivChild = new Array();
  for (let j = 0; j < numOfRows; j++) {
    for (let i = 0; i < numOfColumns; i++) {
      arrayDivChild[i] = document.createElement('div');
      arrayDivChild[i].id = 'row' + i + 'column' + j;
      // arrayDivChild[i].style.backgroundColor = 'orange';
      arrayDivChild[i].className = 'column' + i;

      arrayDivChild[i].className = 'tile';

      // arrayDivChild[i].className = 'columnStyle';

      document.querySelector(`#row${i}`).appendChild(arrayDivChild[i]);

      // console.log(document.querySelector(`#row${i}`));
    }
  }
  addListener()
  // return easContainer;
}

generateGrid(16, 16);
// const nodeList = document.body.childNodes;

function addListener() {


  const tiles = document.querySelectorAll('.tile');

  tiles.forEach(tile => tile.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      // console.log('hovered')
      tile.classList.remove('fadeout')
      tile.classList.add('hovered');
      // console.log(tile);
    },
    false,
  ));

  tiles.forEach(tile => tile.addEventListener(
    "mouseout",
    (event) => {
      // highlight the mouseover target
      console.log('mouse out')
      tile.classList.remove('hovered');
      tile.classList.add('fadeout');
      // console.log(tile);
    },
    false,
  ));

  // tiles.forEach(tile => tile.addEventListener('transitionend', removeTransition));

  function removeTransition(e) {
    if (e.propertyName !== 'background-color') return;
    this.classList.remove('hovered');
    this.classList.remove('fadeout');
    // console.log(this.classList);
  }
  return tiles;
}
// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend',removeTransition));


// window.addEventListener('keydown',playSound)


function getValue() {
  var sliderValue = document.getElementById("mySlider").value;
  alert("Slider Value: " + sliderValue);
}

var slider = document.getElementById("mySlider");
var output = document.getElementById("sliderValue");
//   output.innerHTML = slider.value;

slider.oninput = function () {
  console.log(this.value);
  output.innerHTML = this.value;
}