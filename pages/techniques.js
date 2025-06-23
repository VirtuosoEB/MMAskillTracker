import {cardCreator} from '../modules/links.js';
import {convert} from '../modules/convert.js'
console.log("🚀 techniques.js script loaded");
let headings = document.getElementById("tHeading")
headings.textContent = sessionStorage.getItem("category")
console.log(sessionStorage.getItem("category"))
let addTBtn = document.getElementById("addTBtn")
addTBtn.addEventListener("click", cardCreator)

convert()