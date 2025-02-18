function calculategst() {
    const amount = parseFloat(document.getElementById("num").value)
    const gst = parseFloat(document.getElementById("opt").value)
    document.getElementById("amount").innerHTML = `Amount: ₹ ${amount}`
    const ans = (amount * gst) / 100
    document.getElementById("gst").innerHTML = `GST (${gst}%): ₹ ${ans}`
    const result = amount + ans
    document.getElementById("total").innerHTML = `Total: ₹ ${result}`

}