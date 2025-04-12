const overlay = document.getElementById('overlay');
const darkoverlay = document.getElementById("darkoverlay");

const hatter = document.getElementById("Color");
const sotetites = document.getElementById("Sot");
const elmosodas = document.getElementById("Elmos");

hatter.addEventListener("input", function () {
  overlay.style.backgroundColor = hatter.value;
});


sotetites.addEventListener("input", function () {

  darkoverlay.style.backgroundColor = "rgba(0, 0, 0," + sotetites.value/10 + ")";
});


elmosodas.addEventListener("input", function(){
darkoverlay.style.backdropFilter = "blur(" + elmosodas.value+ "px";
});
