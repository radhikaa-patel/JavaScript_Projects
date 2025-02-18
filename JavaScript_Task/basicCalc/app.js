function doSum() {
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    const result = num1 + num2
    document.getElementById("res").innerHTML = `Sumission of given two number is ${result}`
}
function doSub() {
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    const result = num1 - num2
    document.getElementById("res").innerHTML = `Substraction of given two number is ${result}`
}
function doMul() {
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    const result = num1 * num2
    document.getElementById("res").innerHTML = `Multiplication of given two number is ${result}`
}
function doDiv() {
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    const result = num1 / num2
    document.getElementById("res").innerHTML = `Division of given two number is ${result}`
}

