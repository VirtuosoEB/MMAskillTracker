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

let cards = []

function finished(param) {
  let tName = document.getElementById("tName").value
let tNote = document.getElementById("tNotes").value

  let newCard = {
    name: tName,
    type: category,
    note: tNote, 
  };
  cards.push(newCard);
  sessionStorage.setItem("cards", JSON.stringify(cards))
}
let finishBtn = document.getElementById("finishBtn")
finishBtn.addEventListener("click", finished)