import {container, formElements} from '../modules/elements.js';
import {insert} from "../modules/insert.js"

// == place to add Form creator ==

let entryForm = document.createElement("form")
  let insertion = document.getElementById("insertion")
  
// == creates button ==
let createBtn = document.getElementById("createBtn")
createBtn.addEventListener("click", entryCreator)

function entryCreator() {
  insert(formElements, container)
  insert(container, insertion)
}