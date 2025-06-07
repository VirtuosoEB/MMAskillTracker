console.log('Hello World!');

//module importation
import {moveCircle} from "./modules/circleMovement.js"
import {journalLink, tLink} from "./modules/links.js"
let state = 0 

// grabbing images
const striking = document.getElementById("striking")
const grappling = document.getElementById("grappling")
const tactics = document.getElementById("tactics")
const submissions = document.getElementById("submissions")
const defense = document.getElementById("defense")


striking.addEventListener("click", tLink)
grappling.addEventListener("click", tLink)
tactics.addEventListener("click", tLink)
submissions.addEventListener("click", tLink)
defense.addEventListener("click", tLink)

//journal link
const bookmark = document.getElementById("bookmark")
bookmark.addEventListener("click", journalLink)

//circle movement
const arrow = document.getElementById("arrow")
arrow.addEventListener("click", () => moveCircle())