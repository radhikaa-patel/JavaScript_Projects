
// function getrandomrgb() {

//     const r = Math.floor(Math.random() * 256)
//     const g = Math.floor(Math.random() * 256)
//     const b = Math.floor(Math.random() * 256)

//     return `rgb(${r},${g},${b})`
// }
// document.body.style.backgroundColor = getrandomrgb()
// setInterval(function(){
//     document.body.style.backgroundColor = getrandomrgb()
// }, 1000)


function getrandomrgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}


document.body.style.backgroundColor = getrandomrgb();


const toggleSwitch = document.getElementById('toggleSwitch');


function startChangingBackground() {
    setInterval(function () {
        if (toggleSwitch.checked) {
            document.body.style.backgroundColor = getrandomrgb();
        }
    }, 1000);
}


toggleSwitch.addEventListener('change', function () {
    if (toggleSwitch.checked) {
        startChangingBackground();
    } else {
        document.body.style.backgroundColor = "#ffffff";
    }

});


