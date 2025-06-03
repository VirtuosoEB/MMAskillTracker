console.log('Hello World!');
function moveCircle() {
  console.log("Clicked");
  let circle = document.getElementById("circle");
  let arrow = document.getElementById("arrow");
  circle.style.top = "20%"
  arrow.style.top = "0%"
  arrow.style.transform = "rotate(180deg)"
}