let divHeader = document.getElementById("header");
// console.log(divHeader);
divHeader.style.backgroundColor = "cyan";

let title = document.getElementById("title");
title.textContent = "Modificado pelo JavaScript";

function desaparecerCards() {
  let cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
}
