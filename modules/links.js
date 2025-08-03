export function journalLink(){
  window.location.href = "pages/entries.html"
}

let buttonId = ""
export function tLink(x){
  buttonId = x.id
  window.location.href = "pages/techniques.html"
  sessionStorage.setItem("category", buttonId)
}
export function cardCreator(){
  console.log("it should change page")
  window.location.href = "../pages/cardCreator.html"
}