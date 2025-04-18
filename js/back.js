const overlay = document.getElementById("overlay");
const darkoverlay = document.getElementById("darkoverlay");

const hatter = document.getElementById("Color");
const sotetites = document.getElementById("Sot");
const elmosodas = document.getElementById("Elmos");

hatter.addEventListener("input", function () {
  
  overlay.style.backgroundColor = hatter.value;
});

elmosodas.addEventListener("input", function(){
  overlay.style.backdropFilter = "blur(" + elmosodas.value+ "px)";
  });

sotetites.addEventListener("input", function () {

  darkoverlay.style.backgroundColor = "rgba(0, 0, 0," + sotetites.value/10 + ")";
});





const nagy = document.getElementById("nagy");
const kis = document.getElementById("kis");
const szam = document.getElementById("szam");
const spec = document.getElementById("spec");



const gomb = document.getElementById("general");

gomb.addEventListener("click", function(e){

  e.preventDefault();
  let string = "";

  if(nagy.checked){
    let number = 65;
let letter = String.fromCharCode(number);
console.log(letter); // Outputs: "A"
  }



})



