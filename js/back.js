//checkbox
const nagybetuk = document.getElementById("nagybetuk");
const kisbetuk = document.getElementById("kisbetuk");
const szamok = document.getElementById("szamok");
const specialkarakter = document.getElementById("specialkarakter");
const min1 = document.getElementById("min1");

//passlength
const passlen = document.getElementById("passlen");
const numvalue = document.getElementById("value");
//hova irja ki
var kiir = document.getElementById("kiir");

//generaljon
const gomb = document.getElementById("general");

const copy = document.getElementById("copy");

passlen.addEventListener("input", function () {
  numvalue.value = passlen.value;
})
numvalue.addEventListener("input", function () {
  passlen.value = numvalue.value;
})
//keverje fel a karaktereket, given an array it mixes the characters
function Shuffle(pass_slice) {


  for (let i = 0; i <= pass_slice.length - 1; i++) {

    let ind1 = Math.floor(Math.random() * pass_slice.length);
    let ind2 = Math.floor(Math.random() * pass_slice.length);

    /*
    let temp = pass_slice[ind1];
    pass_slice[ind1] = pass_slice[ind2];
    pass_slice[ind2] = temp;
    */
    //3rd variable not neccesary, nem kotelezo
    [pass_slice[ind1], pass_slice[ind2]] = [pass_slice[ind2], pass_slice[ind1]];

  }

  //return the array
  return pass_slice;

}


function RandomCharacter(set) {

  //pick a random index from the character set 
  return set[Math.floor(Math.random() * set.length)];

}

function PasswordGen(check) {

  const pass = [];
  const necessary_sets = [];


  const checks = [nagybetuk.checked, kisbetuk.checked, szamok.checked, specialkarakter.checked];
  const sets = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!@#$%^&*()_+[]{}"];


  for (let i = 0; i < checks.length; i++) {
    if (checks[i]) {
      necessary_sets.push(sets[i]);
    }
  }


  if (check) {
    necessary_sets.forEach(e => {
      pass.push(RandomCharacter(e));
    });

  }

  while (pass.length < parseInt(passlen.value)) {

    var random_cat = Math.floor(Math.random() * necessary_sets.length);
    pass.push(RandomCharacter(necessary_sets[random_cat]));

  }

  return Shuffle(pass).join("");

}


gomb.addEventListener("click", function (e) {

  //alapertelmezett mukodes alljon meg
  e.preventDefault();

  if (!nagybetuk.checked && !kisbetuk.checked && !szamok.checked && !specialkarakter.checked) {
    nagybetuk.checked = true;
  } else {
    //Password is given to the form element 
    kiir.value = PasswordGen(min1.checked);
  }


});

copy.addEventListener("click", function () {

  kiir.select();

  navigator.clipboard.writeText(kiir.value);

});



