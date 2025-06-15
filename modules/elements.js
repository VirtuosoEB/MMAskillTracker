import {removeElements, insert, addNote} from "/modules/insert.js"

// Create container
export const container = document.createElement("div");
container.style.borderStyle = "dashed"

// === Inputs & Labels ===
const dateInput = document.createElement("input");
dateInput.type = "text";

const dateLabel = document.createElement("p");
dateLabel.textContent = "Date:";

const classTypeInput = document.createElement("input");
classTypeInput.type = "text";

const classTypeLabel = document.createElement("p");
classTypeLabel.textContent = "Class Type:";

const durationInput = document.createElement("input");
durationInput.type = "text";

const durationLabel = document.createElement("p");
durationLabel.textContent = "Duration:";

// === Notes Section ===
const noteHeading = document.createElement("h2");
noteHeading.textContent = "Notes";

const noteInput = document.createElement("textarea");

// Auto-resize the textarea
noteInput.addEventListener("input", () => {
  noteInput.style.height = "auto"; // Reset height
  noteInput.style.height = noteInput.scrollHeight + "px"; // Expand as needed
});

// === cancel button ===
let cancelBtn = document.createElement("button")
cancelBtn.textContent = "cancel"

// ===cancel button ===
let addBtn = document.createElement("button")
addBtn.textContent = "add"
// === Group all inputs in an array (for convenience or rendering) ===
export const formElements = [
  dateLabel, dateInput, classTypeLabel, classTypeInput, durationLabel, durationInput, noteHeading, noteInput, cancelBtn, addBtn];

//=== adds function to cancelBtn===
cancelBtn.addEventListener("click", () => removeElements(container))
addBtn.addEventListener("click", () => addNote(dateInput, noteInput, container))