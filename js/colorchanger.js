//fedő
const overlay = document.getElementById("overlay");
const darkoverlay = document.getElementById("darkoverlay");


//hatter szinvaltoztatasnak az ertekei
const hatter = document.getElementById("Color");
const sotetites = document.getElementById("Sot");
const elmosodas = document.getElementById("Elmos");



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
