//checkboxok
const nagybetuk = document.getElementById("nagybetuk");
const kisbetuk = document.getElementById("kisbetuk");
const szamok = document.getElementById("szamok");
const specialkarakter = document.getElementById("specialkarakter");
const min1 = document.getElementById("min1");

//jelszo hossza
const passlen = document.getElementById("passlen");
const numvalue = document.getElementById("value");


//hova irja ki
var kiir = document.getElementById("kiir");

//generaljon
const gomb = document.getElementById("general");

//copy gomb
const copy = document.getElementById("copy");


//jelszo ero (progressbar)
const bar = document.getElementById("strengthbar");


passlen.addEventListener("input", function () {
  numvalue.value = passlen.value;
})
numvalue.addEventListener("input", function () {
  passlen.value = numvalue.value;
})


//keverje fel az adott karaktereket (random indexeket cserelget)
function Shuffle(pass_slice) {


  for (let i = 0; i <= pass_slice.length - 1; i++) {

    let ind1 = Math.floor(Math.random() * pass_slice.length);
    let ind2 = Math.floor(Math.random() * pass_slice.length);

    /*
    let temp = pass_slice[ind1];
    pass_slice[ind1] = pass_slice[ind2];
    pass_slice[ind2] = temp;
    */
    //general 2 szamot, megcsereli a karaktereket
    [pass_slice[ind1], pass_slice[ind2]] = [pass_slice[ind2], pass_slice[ind1]];

  }

  //return a tömbot
  return pass_slice;

}


function RandomCharacter(set) {

  //az adott karakterhalmazbol valasszon egy karaktert
  return set[Math.floor(Math.random() * set.length)];

}

function PasswordGen(check) {


  const pass = [];
  const necessary_sets = [];

  // sorrend nem valtozik
  const checks = [nagybetuk.checked, kisbetuk.checked, szamok.checked, specialkarakter.checked];

  const sets = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!@#$%^&*()_+[]{}"];

  //karakterhalmazok amiket felhasznalunk
  for (let i = 0; i < checks.length; i++) {
    if (checks[i]) {
      necessary_sets.push(sets[i]);
    }
  }

  //ha kotelezo 1 karakter minden tipusbol mar rakja be 

  if (check) {
    necessary_sets.forEach(e => {
      pass.push(RandomCharacter(e));
    });

  }

  //addig generaljon karaktereket amig el nem eri a megadott hosszt
  while (pass.length < parseInt(passlen.value)) {

    var random_cat = Math.floor(Math.random() * necessary_sets.length);
    pass.push(RandomCharacter(necessary_sets[random_cat]));

  }

  //2 okbol kell felkavarni a generalt jelszot

  //1. Hogy növeljük a jelszó véletlenszerűségét.
  // 2. ha minden kiválasztott kategóriából kötelező legalább egy karakternek szerepelnie,
  //    először mindegyik típusból beilleszt egy karaktert.
  //    Mivel a sorrendjük nem változik, ezek a karakterek mindig ugyanott lennének,
  //    pl. ha nagy és kisbetű van kiválasztva
  //    (pl. "Ab Fg Jk Lm").
  //    keveréssel elkerüljük az ilyen könnyen felismerhető mintákat.
  const finalpass = Shuffle(pass).join("")

  
  Update_Strength(finalpass);

  return finalpass;

}

function Update_Strength(finalpass) {


  //a jelszo erősségét pontokkal számoltam ki
  var strength = 0;

  //minél több karakter annál több pont

  if (finalpass.length > numvalue.min) {
    strength += (finalpass.length - numvalue.min) / 2;
  }


  //egyszerű regex (ha van benne nagybetű akkor +1.5 pont
  if (/[A-Z]/s.test(finalpass)) {
    strength += 1.5;
  }

  //egyszerű regex (ha van benne kisbetű akkor +1.5 pont
  if (/[a-z]/s.test(finalpass)) {
    strength += 1.5;
  }

  //egyszerű regex (ha van benne szám akkor +1.5 pont
  if (/[0-9]/s.test(finalpass)) {
    strength += 1.5;
  }

  //egyszerű regex (ha van benne speciális karakter (ha nem nagy vagy kisbetu vagy szám akkor csak speciális karakter lehet) akkor +1.5 pont)

  if (/[^A-Za-z0-9]/s.test(finalpass)) {
    strength += 1.5;
  }


  //5 pont = 5 * 10 = 50%
  //9 pont = 9 * 10 = 90% a progressbarban.

  const barlen = strength * 10
  bar.style.width = barlen + "%";


  //szint allit be, a pontoktol függ a szine
  if (barlen < 40) {
    bar.style.backgroundColor = "red";
  }

  if (barlen < 70 && barlen > 40) {
    bar.style.backgroundColor = "yellow";
  }

  if (barlen > 70 && barlen < 90) {
    bar.style.backgroundColor = "DarkGreen";
  }

  if (barlen > 90 && barlen < 100) {
    bar.style.backgroundColor = "lime";

  }

  if (barlen == 100) {
    bar.style.backgroundColor = "Chartreuse";

  }


}

gomb.addEventListener("click", function (e) {

  //alapertelmezett mukodes alljon meg (form tag miatt)
  e.preventDefault();

  //mindig 1 kategoria legyen checkkolva
  if (!nagybetuk.checked && !kisbetuk.checked && !szamok.checked && !specialkarakter.checked) {
    nagybetuk.checked = true;
  } else {
    //jelszót átadja a input elemnek
    kiir.value = PasswordGen(min1.checked);




  }


});

//copy gomb
copy.addEventListener("click", function () {

  kiir.select();

  navigator.clipboard.writeText(kiir.value);

});



