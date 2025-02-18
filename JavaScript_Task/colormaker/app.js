function updateColor() {
    const r = document.getElementById("r").value;
    const g = document.getElementById("g").value;
    const b = document.getElementById("b").value;

    const rgbColor = `rgb(${r}, ${g}, ${b})`;


    document.getElementById("colorDisplay").style.backgroundColor = rgbColor;


    document.getElementById("currentColor").textContent = rgbColor;
}


function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    document.getElementById("r").value = r;
    document.getElementById("g").value = g;
    document.getElementById("b").value = b;


    updateColor();
}


document.getElementById("r").addEventListener("input", updateColor);
document.getElementById("g").addEventListener("input", updateColor);
document.getElementById("b").addEventListener("input", updateColor);


updateColor();
