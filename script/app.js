let darkSwitch = document.getElementById("darkmode")[0];
let body = document.getElementsByTagName("body")[0];
let darknav = document.getElementsByTagName("nav")[0];
let cards = document.querySelectorAll(".card");
darkmode.addEventListener("click", () => {
  body.classList.toggle("darkBody");
  darknav.classList.add("darknav");
  cards.forEach((card) => {
    card.classList.toggle("darkcard");
  });
});
