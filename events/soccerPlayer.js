
var isOn = true;
var playerNode = document.querySelector('#football');

function handler1(e) {
    //playerNode.style.left = e.offsetX - 50;
    //playerNode.style.top = e.offsetY - 50;
    var x = e.offsetX - 50;
    var y = e.offsetY - 50;
    var style = "top: " + y + "px; left:" + x + "px;"
    playerNode.setAttribute("style", style);
}

document.body.addEventListener('click', handler1);


var buttonNode = document.querySelector('input');

function handler2() {
    if (isOn) {
        document.body.removeEventListener('click', handler1);
        buttonNode.value = 'Start Moving';
        isOn = false;
    } else {
        document.body.addEventListener('click', handler1);
        buttonNode.value = 'Stop Moving';
        isOn = true;
    
    }
}
buttonNode.addEventListener('click', handler2);
