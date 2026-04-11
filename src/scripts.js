const output = document.getElementById("output");
const input = document.getElementById("input");
const container = document.getElementById("output-container");

function fitText() {
    let fontSize = 90; 
    output.style.fontSize = fontSize + "px";

    while (
        (output.scrollWidth > container.clientWidth ||
         output.scrollHeight > container.clientHeight) &&
        fontSize > 10
    ) {
        fontSize--;
        output.style.fontSize = fontSize + "px";
    }
}

function updateText() {
    output.textContent = input.value;
    fitText();
}

input.addEventListener("input", updateText);
window.addEventListener("resize", fitText);
 
updateText();