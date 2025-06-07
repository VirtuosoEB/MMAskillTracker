let entryForm = document.createElement("form")
  let insertion = document.getElementById("insertion")
export function classInfo(){
  let date = document.createElement("p");
  date.textContent = "Date:";
  
  let classType = document.createElement("p");
  classType.textContent = "Class Type:";
  
  let duration = document.createElement("p");
  duration.textContent = "Duration:";
  
  console.log("your doing something right")
  let dateInput = document.createElement("input")
  dateInput.type = "text"
  let classTypeInput = document.createElement("input")
  classTypeInput.type = "text"
  let durationInput = document.createElement("input")
  durationInput.type = "text"
  
  insertion.appendChild(date);
  insertion.appendChild(dateInput);
  insertion.appendChild(classType);
  insertion.appendChild(classTypeInput);
  insertion.appendChild(duration);
  insertion.appendChild(durationInput);
}
export function addCancelBtn() {
  let cancelBtn = document.createElement("button");
  cancelBtn.textContent = "cancel"
  cancelBtn.id = "cancelBtn"
  insertion.appendChild(cancelBtn);
  console.log("button added")
}

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