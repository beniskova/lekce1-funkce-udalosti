// tady je místo pro náš program

//document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */

function secti(a, b) {
  let c = a + b;
  return c;
}



/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
}
console.log("Gratulace, právě jsi spustila tuto funkci!");
console.log(upozorni);

let nadpis = document.querySelector(".ctverecek");
nadpis.textContent = "Gratulace";
//nadpis.style.backgroundColor = "green"


function zmen_barvu() {
  nadpis.style.backgroundColor = "green"
}

function zobraz_vysledek() {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}
