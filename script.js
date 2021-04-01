const colorBoxes = document.getElementsByClassName('color-boxes')[0];
const color = document.getElementById('color');
const hex = document.getElementById('hex');

let colorsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

colorsArray.forEach(divMaker);

function divMaker(text){
  const div = document.createElement('div');
  div.className = 'box';
  div.style.background = text.color_name;
  div.innerHTML = '<h2>'+text.color_name+'</h2>' +
                  '<h2>'+text.hex_code+'</h2>';
  colorBoxes.appendChild(div);
}

function add(){
  var color_info = {
    'color_name' : color.value,
    'hex_code'  : hex.value
  }
  colorsArray.push(color_info);
  localStorage.setItem('items', JSON.stringify(colorsArray));
  divMaker(colorsArray[colorsArray.length - 1]);
  color.value = '';
  hex.value = '';
}

function del(){
  localStorage.clear();
  colorsArray = [];
  colorBoxes.innerHTML = '';
}