/**
 * Firstly, we created one function about increase of battery,
 * Secondly, we created one function about decrease of battery,
 */

function chargeBattery(){
    if (batteryPercent < 4){
        batteryPercent = batteryPercent + 1
    }
    if (batteryPercent == 0){
        document.getElementById("row-3").style.backgroundColor = "white";
        document.getElementById("row-2").style.backgroundColor = "white";
        document.getElementById("row-1").style.backgroundColor = "white";
    }
    else if (batteryPercent == 1){
        document.getElementById("row-3").style.backgroundColor = "red";
        document.getElementById("row-2").style.backgroundColor = "white";
        document.getElementById("row-1").style.backgroundColor = "white";
    }
    else if (batteryPercent == 2){
        document.getElementById("row-3").style.backgroundColor = "yellow";
        document.getElementById("row-2").style.backgroundColor = "yelllow";
        document.getElementById("row-1").style.backgroundColor = "white";
    }
    else if (batteryPercent == 3){
        document.getElementById("row-3").style.backgroundColor = "green";
        document.getElementById("row-2").style.backgroundColor = "green";
        document.getElementById("row-1").style.backgroundColor = "green";
    }
    console.log(batteryPercent); 
    return
    
}

function dechargeBattery(){
    if (batteryPercent >= 0){
        batteryPercent = batteryPercent - 1
    }
    if (batteryPercent == 0){
        document.getElementById("row-3").style.backgroundColor = "white";
        document.getElementById("row-2").style.backgroundColor = "white";
        document.getElementById("row-1").style.backgroundColor = "white";
    }
    if (batteryPercent == 0){
        document.getElementById("row-3").style.backgroundColor = "red";
        document.getElementById("row-2").style.backgroundColor = "white";
        document.getElementById("row-1").style.backgroundColor = "white";
    }
    else if (batteryPercent == 1){
        document.getElementById("row-3").style.backgroundColor = "yellow";
        document.getElementById("row-2").style.backgroundColor = "yelllow";
        document.getElementById("row-1").style.backgroundColor = "white";
    }
    else if (batteryPercent == 2){
        document.getElementById("row-3").style.backgroundColor = "green";
        document.getElementById("row-2").style.backgroundColor = "green";
        document.getElementById("row-1").style.backgroundColor = "green";
    }
    console.log(batteryPercent); 
    return
     
}
    
    
