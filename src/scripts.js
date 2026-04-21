const output = document.getElementById("output");
const input = document.getElementById("input");
const container = document.getElementById("output-container");
const bodyClassList = document.body.classList

const buttonWhite = document.getElementById("white-bg");
const buttonGreen = document.getElementById("green-bg");

buttonWhite.addEventListener('click', ()=> {
    buttonGreen.classList.remove("focus");
    buttonWhite.classList.add("focus");
    document.body.classList.add("white");
    document.body.classList.remove("green");
}
)
buttonGreen.addEventListener('click', ()=> {
    buttonGreen.classList.add("focus");
    buttonWhite.classList.remove("focus");
    document.body.classList.remove("white");
    document.body.classList.add("green");
}
)


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