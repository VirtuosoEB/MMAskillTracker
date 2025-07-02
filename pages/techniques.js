import {cardCreator} from '../modules/links.js';
import {convert} from '../modules/convert.js'
import {detectChange} from '../modules/editCardList.js'

console.log("🚀 techniques.js script loaded");
let headings = document.getElementById("tHeading")
headings.textContent = sessionStorage.getItem("category")
console.log(sessionStorage.getItem("category"))
let addTBtn = document.getElementById("addTBtn")
addTBtn.addEventListener("click", cardCreator)

convert()
let selectionState = 0
function handleClick(event) {
  let selection = event.target
  if (selectionState === 1){
    if(selection.classList.contains("card")){
      selection.remove()
      detectChange()
    }
  } else if (selectionState === 2){
    console.log("editing card")
  } else{
    
  }
}

document.addEventListener("click", handleClick);
function deleteCards(param) {
  selectionState = 1
}
document.getElementById("deleteBtn").addEventListener("click", deleteCards)