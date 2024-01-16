const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

//* Si l'input n'est pas vide, créer un paragraphe
function AddTask(){
  if(inputBox.value !== ''){
    let li = document.createElement('li')
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li)
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span)
  } 
  inputBox.value = '';
  saveData()
}

//* Évenement au click
listContainer.addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked')
  } else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData()
  }
}, false);

//* Save la To Do List
function saveData(){
  localStorage.setItem('data', listContainer.innerHTML);
}
//* Display la data
function showTask(){
  listContainer.innerHTML = localStorage.getItem('data');
}
showTask()
