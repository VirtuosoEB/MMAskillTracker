import {insert} from "./insert.js"
import {getCategoryImg} from "././categoryImgLogic.js"
let cards = JSON.parse(localStorage.getItem("cards"))
export function convert(x, y){
  for (let i = 0; i < x.length; i ++){
    let cardData = x[i]
    if(!cardData){continue}
      console.log(x[i])
    let name = x[i].name
    let category = x[i].type
    let note = x[i].note
    let identification = x[i].id
    
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
    card.id = identification
    let cardInfo = [cardName, typeImg, noteContent]// puts elements in array
    insert(cardInfo, card)
    insert(card, y)
  }
}