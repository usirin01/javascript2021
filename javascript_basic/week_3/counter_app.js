let counter = 1;

const counterContainer = document.querySelector("#counter-container");

setInterval(function(){
    ++counter;
    if(counter % 2 == 0){
        counterContainer.innerHTML = "<h1 style='color:green'>" + counter + "</h1>";
    }else{
        counterContainer.innerHTML = "<h1 style='color:red'>" + counter + "</h1>";
    }

}, 1000);
//1000 ms == 1 sn