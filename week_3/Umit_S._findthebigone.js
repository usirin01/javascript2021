//This defined function can comparis two numbers// 
//1)we define the variable of the first number
//2)we define the variable of the second number
//3)we call to entered of first number and if it's bigger than other number, we show this number on the screen. After that, the program is ending.
//4)we call to entered of second number and if it's bigger than other number, we show this number on the screen. Than the program is ending. 
//5)if two numbers value is equal, we want to show "two numbers are equal" on the screen. Than the program is ending.

function PushButton()
{
//first and second input area's structure were created//
let firstnumber = document.getElementById("number-1").value;
let secondnumber = document.getElementById("number-2").value;
console.log(result);
    
//comparis steps//
    if(firstnumber > secondnumber)
    {
        document.getElementById("result").innerHTML = firstnumber;
    }
    else if(secondnumber > firstnumber){
        document.getElementById("result").innerHTML = secondnumber;
    }
    else{
        document.getElementById("result").innerHTML = "two numbers are equal"
    }
}