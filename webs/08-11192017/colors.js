//Select text color according to background color
function textColor(color) {
    let hexcolor = color.replace('#', '');
    return (parseInt(hexcolor, 16) > 0xffffff / 2) ? 'black' : 'white';
}

function randomColor() {
    //16777215 is #FFFFFF in hex
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


const transitionTime = 20000; //20 seconds

setInterval(function updateBackground() {
    $('body').css('background', randomColor());

    let color = randomColor();
    $('.style1').css('background', color);
    $('.style1').css('color', textColor(color));

}, transitionTime);