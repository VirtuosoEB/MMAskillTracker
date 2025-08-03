import {sortCards} from '../modules/cardSorter.js';
//checks category currently selected 
let category = sessionStorage.getItem("category")
console.log("cardCreator detected" + category )
let image = document.getElementById("categoryImg")

// === Sets category image ===
if( category === "Striking"){
    image.src = "../Assets/striking.svg"
  } else if( category === "Grappling"){
   image.src = "../Assets/grappling.svg"
  } else if( category === "Submissions"){
    image.src = "../Assets/submissions.svg"
  }else if( category === "Tactics"){
    image.src = "../Assets/tactics.svg"
  }else{
    image.src = "../Assets/defense.svg"
  }
  
// gets list of cards
let cards = JSON.parse(localStorage.getItem("cards")) || []


// === adds card to list once finished ===
function finished(param) {
  let tName = document.getElementById("tName").value
  let tNote = document.getElementById("tNotes").value
  let newCard = {
    name: tName,
    type: category,
    note: tNote, 
  };
    cards.push(newCard);
    for (let i = 0; i<cards.length; i++){
      let cardId = "cardId"
      cards[i][cardId] = i
    }
  localStorage.setItem("cards", JSON.stringify(cards))
  sortCards()
  console.log("it's working 👍")
}
let finishBtn = document.getElementById("finishBtn")
finishBtn.addEventListener("click", finished)