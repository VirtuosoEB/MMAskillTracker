export function editSelection(x) {
  let cardHeading = x.getElementsByTagName("h1")[0].textContent
  let cardImage = x.getElementsByTagName("img")[0].src
  let cardNote = x.getElementsByTagName("p")[0].textContent
  let cardId = x.id
  
  let card = {
    name: cardHeading, 
    type: cardImage, 
    note: cardNote, 
    id: cardId
  }
  sessionStorage.setItem("cardInfo", JSON.stringify(card))
  window.location.href = "../pages/cardEditor.html"
}