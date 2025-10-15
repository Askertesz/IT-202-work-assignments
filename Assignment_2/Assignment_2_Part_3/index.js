function calculateTip() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    let tip = parseFloat(document.getElementById('tip').value);


    tipPercent = tip / 100;
    total = (subtotal * tipPercent) + subtotal;


    //final = total.tofixed(2);
    //console.log(final);

    document.getElementById('output').textContent = 'Your total with tip is: $' + total.toFixed(2);

}