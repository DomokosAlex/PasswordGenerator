//checkboxok
const nagy = document.getElementById("nagy");
const kis = document.getElementById("kis");
const szam = document.getElementById("szam");
const spec = document.getElementById("spec");
const cont1 = document.getElementById("atl1");

//hossza, hova irja ki
const hossz = document.getElementById("hossz");
var kiir = document.getElementById("kiir");

//generaljon
const gomb = document.getElementById("general");

//mibol valasszon, szam nincs kozottuk mert folosleges tarolni, csak generalok egy szamot, nem kell index
var nagybetu = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var kisbetu = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*()_+[]{}";




function Shuffle(pass_slice) {

  let shuffles = Math.floor(Math.random() * hossz.max) + 1;

  for (let i = 0; i <= shuffles; i++) {

    let ind1 = Math.floor(Math.random() * pass_slice.length);
    let ind2 = Math.floor(Math.random() * pass_slice.length);

    let temp = pass_slice[ind1];
    pass_slice[ind1] = pass_slice[ind2];
    pass_slice[ind2] = temp;

  }

  pass_slice = pass_slice.join("");

  return pass_slice;

}


function PasswordGen() {
  const pass = [];

  



}


gomb.addEventListener("click", function (e) {

  //alapertelmezett mukodes alljon meg
  e.preventDefault();

  //hogyha legalabb 1-nek lennie kell per kategoria
  if (cont1.checked) {

    //csak LEHETSEGES hogy benne van
  } else {

    NemKotelezo();

  }

});




