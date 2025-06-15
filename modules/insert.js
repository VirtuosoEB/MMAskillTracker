export function insert(from, to){
  if (Array.isArray(from)){
    for (let i = 0; i<from.length; i++){
      to.appendChild(from[i])
    }
  } else{
    to.appendChild(from)
  }
}


export function removeElements(x){
  if (Array.isArray(x)){
    for (let i = 0; i < x.length; i++){
      x[i].remove()
    }
  } else{
    x.remove()
  }
}

export function addNote(date, noteInput, container){
 
  let noteDiv = document.createElement("div")
  noteDiv.style.border = "solid"
  
  let headings = document.createElement("h1")
  headings.textContent = date.value
  let content = document.createElement("p")
  content.textContent = noteInput.value
  let note = [headings, content]
  let body = document.body
  insert(note, noteDiv)
  insert(noteDiv, body)
  console.log("it should be working ")
  removeElements(container)
}