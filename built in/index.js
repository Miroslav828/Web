var hello = 'Hello JS';
console.log(hello);
function dataOfBrowser () {
    return navigator.appName + '\n' + navigator.appVersion + '\n'  + navigator.appCodeName;
}
console.log(dataOfBrowser());
function isOnline () {
    if (navigator.onLine) {
        return 'Online';
    } else {
        return 'Offline';
    }
}
console.log(isOnline());
function screen () {
    console.log(window.screen.availHeight);
}
console.log(screen());
function locat () {
    return location.href + '\n' + location.hostname + '\n' + location.protocol + '\n' + location.pathname;
}
console.log(locat());

function reloadPage () {
    return location.reload();
}
function redirectToWebsite(){
    return location.replace("https://www.wikipedia.org/")
}

(function passedData (){
 localStorage.setItem('name', 'Miroslav');
 localStorage.setItem('surname', 'Madic');
 localStorage.setItem('city','Obrenovac');
})();
function readData(data){
    var result = localStorage.getItem(data);
     if(!data || result === null){
         return 'there in no data'
     }else{
         return result;
     }
}

function removeData (item){
    localStorage.removeItem(item);
}
//console.log(removeData()):
//console.log(readData());



