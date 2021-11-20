let counter = 1;

const counterContainer = document.querySelector("#counter-container");

setInterval(function(){
    counterContainer.innerHTML="<h1>" + counter++ + "</h1>";

}, 1000);
//1000 ms == 1 sn