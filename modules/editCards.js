//getting card List
let cards = JSON.parse(localStorage.getItem("cards"))
let cardImage = 0


export function editSelection(x) {
  let cardHeading = x.getElementsByTagName("h1")[0].textContent// sets heading
  
  let cardNote = x.getElementsByTagName("p")[0].textContent
  let cardId = x.id//sets note
  
  //=== gets category type===
  let cardImage = 0
  for (let i = 0; i < cards.length; i++){
      let identity = cards[i].id
      
      if (String(identity) === String(cardId)){
        console.log("found it!🫰")
        cardImage = cards[i].type
        break
      } else {
        console.log("nothing has been found yet")
      }
      
    }
  
  //=== compiles info ===
  let card = {
    name: cardHeading, 
    type: cardImage, 
    note: cardNote, 
    id: cardId
  }
  sessionStorage.setItem("cardInfo", JSON.stringify(card))
  window.location.href = "../pages/cardEditor.html"
}