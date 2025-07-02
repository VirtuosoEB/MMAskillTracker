function getCardInfo(clicked) {
  // Get the heading (assumes there's one <h1> inside the clicked element)
  let clickedHeading = clicked.getElementsByTagName("h1")[0].textContent;

  // Get the second image (index 1)
  let clickedImage = clicked.getElementsByTagName("img")[1].src;

  // Get the first paragraph (index 0)
  let clickedNote = clicked.getElementsByTagName("p")[0].textContent;

  // Store the card info as an object or array
  let card = {
    heading: clickedHeading,
    image: clickedImage,
    note: clickedNote
  };

  // Save to sessionStorage (must use a key and a stringified value)
  sessionStorage.setItem("cardInfo", JSON.stringify(card));
}