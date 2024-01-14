var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

//* Évenement au click

addToDoButton.onclick = function(){
  /// si l'input n'est pas vide, créer un paragraphe
  if(inputField.value != ""){
    var paragraph = document.createElement('p')
  }
  /// Valorisé la variable avec le contenu de l'utilisateur
  paragraph.innerText = inputField.value;

  //* Stylisé paragraph
  paragraph.classList.add('paragraph_style')
  toDoContainer.appendChild(paragraph);

  /// Vider l'input quand le paragraph est ajouté
  inputField.value = "";

  //* Barré le paragraph au click
  paragraph.addEventListener('click',function(){
    paragraph.classList.add('paragraph_click')
  })

  //* Supprimer tâche au double click

  paragraph.addEventListener('dblclick',function(){
    toDoContainer.removeChild(paragraph);
  })

}
