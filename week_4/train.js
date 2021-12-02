//first step is we have ten trains wagon on the screen
//Users have 4 chance for find to him
//Users click on any wagon, we will show some instructions about his place
//If users find correct wagon, the wagon color will change "green" color and show "congratulations" message

function findHim1(){
  document.getElementById("instructions").innerHTML = "You are so far, Ahmet is behind the train";
}

function findHim2(){
  document.getElementById("instructions").innerHTML = "You are far, Ahmet is behind the train"; 
  
}
function findHim3(){
  document.getElementById("instructions").innerHTML = "Try again,he is behind the train";
 
}
function findHim4(){
  document.getElementById("instructions").innerHTML = "You should look back";  

}
function findHim5(){
  document.getElementById("instructions").innerHTML = "You should look a little further back"; 
 
}
function findHim6(){
  document.getElementById("instructions").innerHTML = "Ahmet is behind the train, but you are a little bit close now"; 
  
}

function youGotIt(){
  document.getElementById("instructions").innerHTML = "You are so close but still he is behind the train";
}

function findHim8(){
  document.getElementById("instructions").innerHTML = "<strong>Congratulations You found him !!!"; 
  wagon8.style.backgroundColor = "green"; 
}
function findHim9(){
  document.getElementById("instructions").innerHTML = "Ahmet is still in front of the wagons of the train";
}
function findHim10(){
  document.getElementById("instructions").innerHTML = "Ahmet is in front of the wagons of the train" ; 
}




