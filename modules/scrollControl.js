export function scrollControl(){
  let list = document.querySelectorAll(".cardList")
  let currentSection
  let mostSpaceTaken = 0
  let observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
      let rect = list.intersectionRect.height()
      if (!mostSpaceTaken){continue}
      if (rect > mostSpaceTaken){
        
      }
    })
    
  })
}