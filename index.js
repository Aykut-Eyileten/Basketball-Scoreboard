let scoreHomeEl = document.getElementById("scoreHome-el");
let scoreGuestEl = document.getElementById("scoreGuest-el");

function increaseScore(sectionName, amount) {
  if (sectionName === "home") scoreHomeEl.textContent = parseInt(scoreHomeEl.textContent) + amount;
  if (sectionName === "guest")
    scoreGuestEl.textContent = parseInt(scoreGuestEl.textContent) + amount;
}
