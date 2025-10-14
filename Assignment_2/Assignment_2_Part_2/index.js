function numericPalindromeDetector(){
    let userInput = document.getElementById('userInput').value;

    const reversed = userInput.split('').reverse().join('');

    if(reversed == userInput){
        document.getElementById('output').innerText = 'Congradulations! ' + userInput + ' is a palindrome!';
    }
    else{
        document.getElementById('output').innerText = 'Sorry, ' + userInput + ' is not a palindrome';
    }
}