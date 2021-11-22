//This defined function can comparis two numbers// 
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