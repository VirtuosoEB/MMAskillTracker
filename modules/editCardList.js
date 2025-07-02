export function detectChange(){
  let cards = document.querySelectorAll("div.card")
  let newCards = []
  for (let i = 0; i < cards.length; i ++){
//=== takes info of each card ===
    let cardName = cards[i].getElementsByTagName("h1")[0].textContent
    let cardCategory = cards[i].getElementsByTagName("img")[0].src
    console.log(cardCategory)
    let cardNote = cards[i].getElementsByTagName("p")[0].textContent
  //=== saves in an object===
    let card = {
      name: cardName,
      type: cardCategory,
      note: cardNote
    }
    newCards.push(card)
  }
  let newCardList = JSON.stringify(newCards)
  sessionStorage.setItem("cards", newCardList)
}