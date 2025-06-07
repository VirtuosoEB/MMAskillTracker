import {classInfo, addCancelBtn, notes} from '../modules/entryTemplate.js';

let createBtn = document.getElementById("createBtn")
createBtn.addEventListener("click", entryCreator)

// adds entry creator
function entryCreator() {
  classInfo()
  addCancelBtn()
  const cancelBtn = document.getElementById("cancelBtn")
  cancelBtn.addEventListener("click", cancel)
  
  //removes enrtyCreator when button is pressed 
  function cancel() {
    const insertion = document.getElementById("insertion");
    while (insertion.firstChild){
      insertion.removeChild(insertion.firstChild)
    const entryCreatorBtn = document.createElement("button")
    entryCreatorBtn.textContent = "➕"
    
    }
  }
  createBtn.remove()
  notes()
  
}