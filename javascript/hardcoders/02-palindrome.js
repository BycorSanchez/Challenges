/*
	Challenge: check if a word is palindrome
*/

// Ignore case & remove non alphanumeric characters
function format(word) {
    return word.toLowerCase().replace(/[^0-9a-z]/gi, '');
}

function reverse(word) {
    let reverse = '';
    for (let i = 0; i < word.length; i++) {
        reverse = word[i] + reverse;
    }
    return reverse;
}


function palindrome(word) {
    let formatted = format(word);
    return reverse(formatted) === formatted;
}

alert(palindrome("Hello"));


/*
	Alternative - without reverting word
*/


//Uses two indexes (i -> forward, j -> backwards)
function palindrome2(word) {
    let formatted = format(word);

    let j = formatted.length - 1;
    for (let i = 0; i < j; i++, j--) {
        if (formatted[i] !== formatted[j]) {
            return false;
        }
    }
    return true;
}

alert(palindrome2("Never odd or even"));