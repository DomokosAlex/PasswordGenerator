//checkbox
const nagybetuk = document.getElementById("nagybetuk");
const kisbetuk = document.getElementById("kisbetuk");
const szamok = document.getElementById("szamok");
const specialkarakter = document.getElementById("specialkarakter");
const min1 = document.getElementById("min1");

//passlength
const passlen = document.getElementById("passlen");

//hova irja ki
var kiir = document.getElementById("kiir");

//generaljon
const gomb = document.getElementById("general");


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
  const mandatory = [];

  //stores checks
  const checks = [nagybetuk.checked, kisbetuk.checked, szamok.checked, specialkarakter.checked];

  //count how many are checked
  var count = 0;

  const sets = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!@#$%^&*()_+[]{}"];

  checks.forEach(e => {
    if (e) {
      count++
    }
  });

  var category_counter = 0;

  checks.forEach(e => {

    if (e) {

      for (let i = 0; i < passlen.value; i++) {
        pass.push(RandomCharacter(sets[category_counter]));
      }
      if (check) {
        mandatory.push(RandomCharacter(sets[category_counter]));

      }
      

    }

    category_counter++

  });
  const beforecheck = Shuffle(pass).slice(0, pass.length / count);

  //if there are mandatory characters, add them
  if (check) {
    for (let i = 0; i < mandatory.length; i++) {
      beforecheck[i] = mandatory[i];

    }
  }

  //shuffle again because of new characters, turn to string and return
  return Shuffle(beforecheck).join("");

}


gomb.addEventListener("click", function (e) {

  //alapertelmezett mukodes alljon meg
  e.preventDefault();

  if (!nagybetuk.checked && !kisbetuk.checked && !szamok.checked && !specialkarakter.checked) {
    kiir.value = "Select 1 category at minimum";
  } else {
    //Password is given to the form element 
    kiir.value = PasswordGen(min1.checked);
  }


});




