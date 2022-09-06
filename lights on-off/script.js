let changeImg = document.getElementById("bulb-img");
let changeHeading = document.getElementById("main-heading");

function turnOn(){
    changeImg.src =  'on.png';
    changeHeading.innerHTML = "Turn the bulb off !";
}
function turnOff(){
    changeImg.src =  'off.png';
    changeHeading.innerHTML = "Turn the bulb on !";
}



