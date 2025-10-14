

function reverseText() {
    let userInput = document.getElementById('userInput').value;

    const reversed = userInput.split('').reverse().join('');

    document.getElementById('output').innerText = 'your reversed text is: '+reversed;

    
}