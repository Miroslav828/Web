

function doSomething(){

    var something = document.getElementsByClassName ('active')[0];
    console.log(something);
    something.classList.remove('active');
    something.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className = 'active';
}
doSomething();