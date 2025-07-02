import {insert} from "./insert.js"
import {getCategoryImg} from "././categoryImgLogic.js"
let cards = JSON.parse(sessionStorage.getItem("cards"))
export function convert(){
  for (let i = 0; i < cards.length; i ++){
  
    let name = cards[i].name
    let category = cards[i].type
    let note = cards[i].note
    //creates elements for card
    let card = document.createElement("div")
  card.classList.add("card")
    let cardName = document.createElement("h1")
    let typeImg = document.createElement("img")
    let noteContent = document.createElement("p")
    // sets info
    cardName.textContent = name
    typeImg.src = getCategoryImg(category)
    noteContent.textContent = note
    let cardInfo = [cardName, typeImg, noteContent]// puts elements in array
    insert(cardInfo, card)
    let cardList = document.getElementById("cardList")
    insert(card, cardList)
  }
}