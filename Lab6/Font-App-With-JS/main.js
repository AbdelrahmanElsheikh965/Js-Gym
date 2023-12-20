var yourText = document.getElementById("text1");
var newText = document.getElementById("text2");

document.addEventListener("keyup", function () {
    newText.innerText = yourText.value;
});


/* ------------- Solution 1 ------------- */
/* ------------- lobster ------------- */
var lobster = document.getElementById('btn1')
lobster.addEventListener('click', function (event) {
    newText.className = "btn1"; 
})


/* ------------- wallpet ------------- */
var wallpet = document.getElementById('btn2')
wallpet.addEventListener('click', function (event) {
    newText.className = "btn2"; 
})


/* ------------- shadows ------------- */
var shadows = document.getElementById('btn3')
shadows.addEventListener('click', function (event) {
    newText.className = "btn3"; 
})


/* ------------- zcool ------------- */
var zcool = document.getElementById('btn4')
zcool.addEventListener('click', function (event) {
    newText.className = "btn4"; 
})


// /* ------------- Solution 2 ------------- */
// function setAll(targetClass) {
//     newText.className = targetClass;
// }