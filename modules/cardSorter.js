import {insertData} from '../modules/insert.js'
let cards = JSON.parse(localStorage.getItem("cards"))
export function sortCards(){
  let category1 = []
  let category2 = []
  let category3 = []
  let category4 = []
  let category5 = []
  //sorts cards into each category
  for(let i = 0; i<cards.length; i++){
    let type = cards[i].type
    if (type === "Striking"){
      category1.push(cards[i])
    }else if (type === "Grappling"){
      category2.push(cards[i])
    }else if (type === "Submissions"){
      category3.push(cards[i])
    }else if (type === "Tactics"){
      category4.push(cards[i])
    }else if (type === "Defense"){
      category5.push(cards[i])
    }
  }
  //puts card back into one list but now sorted
  let newList = []
  insertData(category1, newList)
  insertData(category2, newList)
  insertData(category3, newList)
  insertData(category4, newList)
  insertData(category5, newList)
localStorage.setItem("cards", JSON.stringify(newList))
}