import {classInfo, addCancelBtn, notes, addEntryBtn} from '../modules/entryTemplate.js';

let createBtn = document.getElementById("createBtn")
createBtn.addEventListener("click", entryCreator)

const entryCreatorBtn = document.createElement("button")
    entryCreatorBtn.textContent = "➕"
    entryCreatorBtn.addEventListener("click", entryCreator)
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
    }
    
    const main = document.getElementsByTagName("main")[0]
    main.appendChild(entryCreatorBtn)
  }
  createBtn.remove()
  entryCreatorBtn.remove()
  notes()
  addEntryBtn()
  
}