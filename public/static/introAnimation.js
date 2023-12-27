
var i = 0;
var txt = 'welcome to wishnick studios';
const t = txt;
var speed = 50;
var teext="";
function typeWrite(){
    if (i< txt.length){
        teext += txt.charAt(i);
        document.getElementById("welcomeText").innerHTML = teext + '_';
        i++;
        if (i == txt.length){
            setTimeout(displayEll, 250);
            setTimeout(displayText, 500);
            setTimeout(displayEll, 1000);
            setTimeout(displayText, 1500);
            setTimeout(displayEll, 2000);
            setTimeout(clearText, 2500);
            setTimeout(displayPage, 2500);

            // then go to home page
        }
        else{
            setTimeout(typeWrite, speed);
        }
    }
}
var ell = '_';
var blinkTimes = 2;
var x = 0;
function displayText(){
    document.getElementById("welcomeText").innerHTML = t;
}
function displayEll(){
    document.getElementById("welcomeText").innerHTML = t + ell;
}
function clearText(){
    document.getElementById("welcomeContainer").style.visibility = 'hidden';
}
function displayPage(){
    document.getElementById("welcomeContainer").style.height = '0vh';

    
    document.getElementById("welcomeText").style.visibility = 'hidden';
    
}
window.onload = function(){
    
    //document.getElementById("homeContainer").style.visibility = 'hidden';
    
    typeWrite();
}
module.exports = {
    
} 