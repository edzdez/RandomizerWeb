var slider = document.getElementById("slider");
var output = document.getElementById("display");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = slider.value;
}