export function getCategoryImg(x){
  let categoryImg = 0
  if (x === "Striking"){
    categoryImg = "../Assets/striking.svg"
  }else if (x === "Grappling"){
    categoryImg = "../Assets/grappling.svg"
  }else if (x === "Submissions"){
    categoryImg = "../Assets/submissions.svg"
  }else if (x === "Tactics"){
    categoryImg = "../Assets/tactics.svg"
  }else if (x === "Defense"){
    categoryImg = "../Assets/defense.svg"
  }
  return categoryImg

}