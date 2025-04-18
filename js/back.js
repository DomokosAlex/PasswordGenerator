const overlay = document.getElementById("overlay");
const darkoverlay = document.getElementById("darkoverlay");

const hatter = document.getElementById("Color");
const sotetites = document.getElementById("Sot");
const elmosodas = document.getElementById("Elmos");

hatter.addEventListener("input", function () {

  overlay.style.backgroundColor = hatter.value;
});

elmosodas.addEventListener("input", function () {
  overlay.style.backdropFilter = "blur(" + elmosodas.value + "px)";
});

sotetites.addEventListener("input", function () {

  darkoverlay.style.backgroundColor = "rgba(0, 0, 0," + sotetites.value / 10 + ")";
});


const nagy = document.getElementById("nagy");
const kis = document.getElementById("kis");
const szam = document.getElementById("szam");
const spec = document.getElementById("spec");
const cont1 = document.getElementById("atl1");




const gomb = document.getElementById("general");

gomb.addEventListener("click", function (e) {

  let pickfrom = [];
 
  if(nagy.checked == true){

    pickfrom.push(1);
  }


  if(kis.checked == true){

    pickfrom.push(2);
  }


  if(szam.checked == true){

    pickfrom.push(3);
  }


  if(spec.checked == true){

    pickfrom.push(4);
  }



  if(cont1.checked == true){

  }else{
    
  }




})



