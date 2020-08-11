var value = document.getElementById("result");
var button = document.getElementById("rollButton");
var slider = document.getElementById("slider");
var audio = new Audio("/assets/HatBasic.wav");
audio.volume = 0.1;

button.onclick = function() {
    if (!audio.paused) return;
    audio.play();
    var upperBound = slider.value;
    value.innerHTML = Math.floor(Math.random() * upperBound + 1);
}