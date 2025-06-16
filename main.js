console.log('Hello World!');

//module importation
import {moveCircle} from "./modules/circleMovement.js"
import {journalLink, tLink} from "./modules/links.js"
let state = 0 

// grabbing images
const striking = document.getElementById("Striking")
const grappling = document.getElementById("Grappling")
const tactics = document.getElementById("Tactics")
const submissions = document.getElementById("Submissions")
const defense = document.getElementById("Defense")


striking.addEventListener("click", () => tLink(striking))
grappling.addEventListener("click", () => tLink(grappling))
tactics.addEventListener("click", () => tLink(tactics))
submissions.addEventListener("click", () => tLink(submissions))
defense.addEventListener("click", () => tLink(defense))

//journal link
const bookmark = document.getElementById("bookmark")
bookmark.addEventListener("click", journalLink)

//circle movement
const arrow = document.getElementById("arrow")
arrow.addEventListener("click", () => moveCircle())

