/**
 * 1)Defining the numbers,
 * 2)Finding and printing minimum number,
 * 3)Finding and printing maximum number,
 * 4)Calculating sum of all numbers and print to screen,
 * 5)Calculating average of all numbers and print to screen,
 * 6)Calculating square roots of all numbers and print to screen,
 * 7)Calculating square of all numbers and print to screen,
 * 8)Ending the program
 */

var numberList = new Array(20);
//document.getElementById("numbers").innerHTML = new Array; //[0, 1, 4, 9, 16, 25, 36, 49, 64, 81];
var min,max;

//randomly find the new array number

for (var i=0; i < numberList.length; i++){
    numberList[i]=Math.floor(Math.random()*100);
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

document.write("NUMBERS" + "<br>");
for(var i=0; i<numberList.length; i++){
    document.write(numberList[i]+"<br>");
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




