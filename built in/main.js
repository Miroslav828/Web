

var firstList = document.querySelector("ul")[0];

function bColor () {
    var secondList = document.querySelectorAll("ul")[1];
     secondList.style.backgroundColor = "green";
 }

 bColor()

 function selectAllLi (){
     var allLiElements = document.querySelectorAll("li");
  console.log (allLiElements);
    for (var i = 0; i< allLiElements.length; i++){
        var li = allLiElements[i];
        li.className = "lists";
    }
 }
selectAllLi();

function liElLastUl (){
    var LastUl = document.querySelectorAll('body ul')[2];
    var liElementsLastUl = LastUl.querySelectorAll ('li');

    console.log(liElementsLastUl);
    for (var i = 0; i< liElementsLastUl.length; i++){
        var liLast = liElementsLastUl[i];
        liLast.className = "lastList";
        liLast.innerHTML = liLast.innerHTML.toUpperCase();
    }

}
liElLastUl();

