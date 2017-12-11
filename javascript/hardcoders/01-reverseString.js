/*
	Challenge: reverse the provided string.
*/

function reverse(word) {
    let reverse = '';
    for (let i = 0; i < word.length; i++) {
        reverse = word[i] + reverse;
    }
    return reverse;
}

alert(reverse('Hello World'));


//Alternative: using array reverse method

function reverse2(word) {
    return word.split('').reverse().join('');
}

alert(reverse2('Hello World'));