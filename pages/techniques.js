import {cardCreator} from '../modules/links.js';
import {convert} from '../modules/convert.js'
import {detectChange} from '../modules/editCardList.js'
import {editSelection} from '../modules/editCards.js'
console.log("🚀 techniques.js script loaded");

// sets technique category
let headings = document.getElementById("tHeading")
headings.textContent = sessionStorage.getItem("category")
console.log(sessionStorage.getItem("category"))

//button that leads to card creator 
let addTBtn = document.getElementById("addTBtn")
addTBtn.addEventListener("click", cardCreator)

// === display cards ===
let cards = JSON.parse(localStorage.getItem("categoryList"))
for (let i = 0; i<cards.length; i++){
  let currentCategory = document.getElementById("category" + String(i+1))
  convert(cards[i],currentCategory )
}



let selectionState = 0// dictates if viewing, editing or deleting cards 

function handleClick(event) {
  let selection = event.target//detects what has been clicked
  console.log(selection)
  if (selectionState === 1){// delete mode
    if(selection.classList.contains("card")){
      selection.remove()
      detectChange()
      selectionState = 0
    }
  } else if (selectionState === 2){ //edit mode
    if(selection.classList.contains("card")){
      console.log("editing card")
    editSelection(selection)
    selectionState = 0
    }
  } else{
    
  }
}

document.addEventListener("click", handleClick);
function deleteCards(param) {
  selectionState = 1
  console.log("delete mode")
}
document.getElementById("deleteBtn").addEventListener("click", deleteCards)

function editCards() {
  selectionState = 2
  console.log("edit mode")
}
document.getElementById("editBtn").addEventListener("click", editCards)