/**
 * First step, user write number of wagon in the input area,
 * Second step, we compare user's choice with correct number, 
 * If Users know at the first time, they will win 100 points,
 * If Users know at the second time, they will win 75 points,
 * If Users know at the third time, they will win 25 points,
 * If Users don't know at the fourth time, they will take zero points and see GAME OVER message.
 */


var userright = 4;
var randomnumber = Math.round(Math.random()*10);
var sayac = 0;
var start = document.querySelector("#start");
var guess = document.querySelector("#guess");
var wagonnumber = document.querySelector("#wagonnumber");
alert("“Now Ahmet is hiding on the train with 10 wagons. Where is he, can you find him?")


guess.onclick = function()
{
    sayac ++;
    if(randomnumber == wagonnumber.value)
    {
        alert("Congratulations You found him!!!");
        alert(`Your Score: ${100-(25)*(sayac-1)}`);
    }
    if (randomnumber != wagonnumber.value && sayac >= userright)
    {
        alert("<strong>GAME OVER! Try Again !!!" + "Ahmet was in the " + randomnumber + ". wagon. Your Score: 0" );  
    }
    else if (wagonnumber.value > randomnumber)
    {
        alert("Ahmet is in front of the wagons of the train");
    }
   else
   {
        alert("Try again,he is behind the train");
   }

}
