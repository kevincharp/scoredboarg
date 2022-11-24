let sum1 = 0;
let sum2 = 0;
let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");

function home1() {
  sum1 += 1;
  homeEl.textContent = sum1;
}
function home3() {
  sum1 += 3;
  homeEl.textContent = sum1;
}
function home6() {
  sum1 += 6;
  homeEl.textContent = sum1;
}

function guest1() {
  sum2 += 1;
  guestEl.textContent = sum2;
}
function guest3() {
  sum2 += 3;
  guestEl.textContent = sum2;
}
function guest6() {
  sum2 += 6;
  guestEl.textContent = sum2;
}

function reset() {
  sum1 = 0;
  sum2 = 0;
  homeEl.textContent = 0;
  guestEl.textContent = 0;
}

function backhome() {
  sum1 = sum1 - 1;
  homeEl.textContent = sum1;
  guestEl.textContent = sum2;
}


function backguest() {
  sum2 = sum2 - 1;
  homeEl.textContent = sum1;
  guestEl.textContent = sum2;
}
