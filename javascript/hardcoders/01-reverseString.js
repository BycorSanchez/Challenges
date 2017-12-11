function reverse(word) {
    let reverse = '';
    for (let i = 0; i < word.length; i++) {
        reverse = word[i] + reverse;
    }
    return reverse;
}

alert(reverse('Hello World'));