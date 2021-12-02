/**
 * 1)Defining the numbers randomly,
 * 2)Finding and printing minimum number,
 * 3)Finding and printing maximum number,
 * 4)Calculating sum of all numbers and print to screen,
 * 5)Calculating average of all numbers and print to screen,
 * 6)Calculating square roots of all numbers and print to screen,
 * 7)Calculating square of all numbers and print to screen,
 * 8)Ending the program
 */

//randomly find the new array number

var numberList = new Array(20);
var min,max;

for (var i=0; i < numberList.length; i++){
    numberList[i]=Math.floor(Math.random()*100);
}
document.write("NUMBERS" + "<br>");
for(var i=0; i<numberList.length; i++){
    document.write(numberList[i]+"<br>");
}

//Finding and printing minimum and maximum number

min = numberList[0];
max = numberList[0];

for (var i=0; i < numberList.length; i++){
    if (min > numberList[i]){
        min = numberList[i];
    }
    if (max < numberList[i]){
        max = numberList[i];
    }
}

document.getElementById("min-number").innerHTML = min;
document.getElementById("max-number").innerHTML = max;

//Calculating sum of all numbers and print to screen

var total = 0;

for (var i = 0; i < numberList.length; i++){
    if (isNaN(numberList[i])){
        continue;
    }
    total += Number(numberList[i]);
}
document.getElementById("sumof").innerHTML = total;

//Calculating average of all numbers and print to screen

document.getElementById("average").innerHTML = total/20;

//Calculating square roots of all numbers and print to screen


for (let i= 0;  i < a; i++){
    let sqrtroot = Math.sqrt(numberList[i])
    console.log(sqrtroot);
}



//Calculating square of all numbers and print to screen

var sqrt = numberList.map(x => x**2);

document.getElementById("squares").innerHTML = sqrt;






