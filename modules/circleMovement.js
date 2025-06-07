let state = 0

export function moveCircle() {
  let circle = document.getElementById("circle");
  let arrow = document.getElementById("arrow");
  if (state === 0){
    circle.style.top = "20%";
    arrow.style.top = "0%";
    arrow.style.transform = "rotate(180deg)";
    state = 1
    console.log("going back")
  } else{
      circle.style.top = "80%";
    arrow.style.top = "60%";
    arrow.style.transform = "rotate(0deg)";
    state = 0
    console.log("return")
  }
    console.log("Clicked" + state);
}