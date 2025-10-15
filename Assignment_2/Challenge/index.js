function dogConverter() {
    dAge = parseFloat(document.getElementById('userInput').value);

    hAge = ((dAge - 2) * 4) + 21;

    document.getElementById('output').textContent = 'Your Dogs Age in Human Years is: ' + hAge;
}