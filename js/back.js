//fedő
const overlay = document.getElementById("overlay");
const darkoverlay = document.getElementById("darkoverlay");


//hatter szinvaltoztatasnak az ertekei
const hatter = document.getElementById("Color");
const sotetites = document.getElementById("Sot");
const elmosodas = document.getElementById("Elmos");



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





//hatterszin, szinkorbol van az erteke
hatter.addEventListener("input", function () {

  overlay.style.backgroundColor = hatter.value;
});

//elmosodas mennyisege pixelben
elmosodas.addEventListener("input", function () {
  overlay.style.backdropFilter = "blur(" + elmosodas.value + "px)";
});

//sotetites mennyisege rgba-ban
sotetites.addEventListener("input", function () {

  darkoverlay.style.backgroundColor = "rgba(0, 0, 0," + sotetites.value / 10 + ")";
});




function NemKotelezo() {

  let pass = "";

  let kat = [];
  if (nagy.checked == true) {

    kat.push(1);
  }

  if (kis.checked == true) {

    kat.push(2);
  }

  if (szam.checked == true) {

    kat.push(3);
  }

  if (spec.checked == true) {

    kat.push(4);
  }



  for (let i = 0; i < hossz.value; i++) {

    var num = kat[Math.floor(Math.random() * kat.length)];
    switch (num) {
      case 1:
        var ind = Math.floor(Math.random() * nagybetu.length);
        pass += nagybetu[ind];
        break;
      case 2:
        var ind = Math.floor(Math.random() * kisbetu.length);
        pass += kisbetu[ind];
        break;
      case 3:
        pass += String(Math.floor(Math.random() * 10));
        break;
      case 4:
        var ind = Math.floor(Math.random() * special.length);
        pass += special[ind];
        break;

    }


  }

  return pass;

}

function Kotelezo() {



  let pass = [];

  let kat = [];
  if (nagy.checked == true) {

    kat.push(1);
    var ind = Math.floor(Math.random() * nagybetu.length);
    pass.push(nagybetu[ind]);
  }

  if (kis.checked == true) {

    kat.push(2);
    var ind = Math.floor(Math.random() * kisbetu.length);
    pass.push(kisbetu[ind]);
  }

  if (szam.checked == true) {

    kat.push(3);
    pass.push(String(Math.floor(Math.random() * 10)));

  }

  if (spec.checked == true) {

    kat.push(4);
    var ind = Math.floor(Math.random() * special.length);
    pass.push(special[ind]);
  }


  var randomize = Math.floor(Math.random() * kat.length) + 1;


  for (let i = 0; i <= randomize; i++) {

    let ind1 = Math.floor(Math.random() * pass.length);

    let ind2 = Math.floor(Math.random() * pass.length);


    let temp = pass[ind1];

    pass[ind1] = pass[ind2];


    pass[ind2] = temp;

  }



  for (let i = 0; i < hossz.value - kat.length; i++) {

    var num = kat[Math.floor(Math.random() * kat.length)];
    switch (num) {
      case 1:
        var ind = Math.floor(Math.random() * nagybetu.length);
        pass.push(nagybetu[ind]);
        break;
      case 2:
        var ind = Math.floor(Math.random() * kisbetu.length);
        pass.push(kisbetu[ind]);
        break;
      case 3:
        pass.push(String(Math.floor(Math.random() * 10)));
        break;
      case 4:
        var ind = Math.floor(Math.random() * special.length);
        pass.push(special[ind]);
        break;

    }


  }

  return pass = pass.join("");



}


gomb.addEventListener("click", function (e) {


  //alapertelmezett mukodes alljon meg
  e.preventDefault();


  //hogyha legalabb 1-nek lennie kell per kategoria
  if (cont1.checked == true) {

    kiir.value = Kotelezo();

    //csak LEHETSEGES hogy benne van
  } else {


    kiir.value = NemKotelezo();






  }




});




