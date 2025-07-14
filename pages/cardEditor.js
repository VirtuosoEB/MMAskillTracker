import {getCategoryImg} from "/modules/categoryImgLogic.js"
//gets card info
let cardInfo = JSON.parse(sessionStorage.getItem("cardInfo"))

// === Sets category image ===
let image = document.getElementById("categoryImg")
image.src = getCategoryImg(cardInfo.type)
let imageSrc = image.src
// === sets card Name ===
let name = document.getElementById("tName")
name.value = cardInfo.name
// === sets card Note ===
let note = document.getElementById("tNotes")
note.value = cardInfo.note

// gets list of cards
let cards = JSON.parse(localStorage.getItem("cards"))


// === adds card to list once finished ===
function finished(param) {
  let tName = document.getElementById("tName").value
  let tNote = document.getElementById("tNotes").value
  let editedCard = {
    name: tName,
    type: cardInfo.type,
    note: tNote
  };
    for (let i = 0; i < cards.length; i++){
      let identity = cards[i].id
      console.log(cardInfo.id)
      console.log(identity)
      if (String(identity) === String(cardInfo.id)){
        cards[i].name = editedCard.name
        cards[i].type = 
          editedCard.type
        cards[i].note = editedCard.note
        console.log("found it!🫰")
        break
      } else {
        console.log("nothing has been found yet")
      }
      
    }
  localStorage.setItem("cards", JSON.stringify(cards))
}
let finishBtn = document.getElementById("finishBtn")
finishBtn.addEventListener("click", finished)