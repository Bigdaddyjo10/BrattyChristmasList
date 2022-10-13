addStuffIWant = document.getElementById('add');
toList = document.getElementById('stuffIWant');
inputField = document.getElementById('inputBar');

addEventListener('click', function(){
  var paragraph = document.createElement('p');
  paragraph.innerText = inputField.value;
  paragraph.classList.add('paragraph-style');
  toList.appendChild(paragraph);
  inputField.value =''
  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = 'line-through';
  })
  paragraph.addEventListener('dblclick', function(){
    toList.removeChild(paragraph);
  })
}) 