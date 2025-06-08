let entryForm = document.createElement("form")
  let insertion = document.getElementById("insertion")
  
  //prepare inputs for creation of div
  let dateInput = document.createElement("input")
  dateInput.type = "text"
  let classTypeInput = document.createElement("input")
  classTypeInput.type = "text"
  let durationInput = document.createElement("input")
  durationInput.type = "text"
  
  //inserts the entry creator
export function classInfo(){
  
  //input labels
  let date = document.createElement("p");
  date.textContent = "Date:";
  let classType = document.createElement("p");
  classType.textContent = "Class Type:";
  let duration = document.createElement("p");
  duration.textContent = "Duration:";
  
  console.log("your doing something right")
  
  insertion.appendChild(date);
  insertion.appendChild(dateInput);
  insertion.appendChild(classType);
  insertion.appendChild(classTypeInput);
  insertion.appendChild(duration);
  insertion.appendChild(durationInput);
}

//adds cancel button 
export function addCancelBtn() {
  let cancelBtn = document.createElement("button");
  cancelBtn.textContent = "cancel"
  cancelBtn.id = "cancelBtn"
  insertion.appendChild(cancelBtn);
  console.log("button added")
}
//adds note box
export function notes(){
  let noteHeadings = document.createElement("h2");
  noteHeadings.textContent = "Notes"
  let noteInput = document.createElement("textarea")
  
  noteInput.addEventListener("input", () => {
  noteInput.style.height = "auto"; // Reset height first
  noteInput.style.height = noteInput.scrollHeight + "px"; // Set to content height
});
  insertion.appendChild(noteHeadings)
  insertion.appendChild(noteInput)
}
export function addEntryBtn(){
  const entryBtn = document.createElement("button")
  entryBtn.textContent = "Add Entry"
  entryBtn.addEventListener("click", addEntry)
  function addEntry() {
    const entryDate = dateInput.value
    const entryHeadings = document.createElement("h1")
    entryHeadings.textContent = entryDate
    const entries = document.getElementById("entries")
    entries.appendChild(entryHeadings)
  }
  insertion.appendChild(entryBtn)
}