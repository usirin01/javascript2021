/**
 * Firstly, we created one function about increase of battery,
 * Secondly, we created one function about decrease of battery,
 * Every click listen by buttons,
 * We created one varible and this variable's (batteryPercent) value can increase and decrease,
 * We have already defined if loops,
 * They can effect battery level color.
 */

// This function is increment function,
function chargeBattery(){
    if (batteryPercent <= 6){
        batteryPercent = batteryPercent + 1
    }
    if (batteryPercent == 0){
        bottom.style.backgroundColor = "white";
        middle.style.backgroundColor = "white";
        up.style.backgroundColor = "white";
    }
    else if (batteryPercent == 2){
        bottom.style.backgroundColor = "red";
        middle.style.backgroundColor = "white";
        up.style.backgroundColor = "white";
    }
    else if (batteryPercent == 4){
        bottom.style.backgroundColor = "yellow";
        middle.style.backgroundColor = "yellow";
        up.style.backgroundColor = "white";
    }
    else if (batteryPercent == 6){
        bottom.style.backgroundColor = "green";
        middle.style.backgroundColor = "green";
        up.style.backgroundColor = "green";
    }
    console.log(batteryPercent); 
    return
    
}
// This function is reduction function,
function dechargeBattery(){
    if (batteryPercent >= 0){
        batteryPercent = batteryPercent - 1
    }
    if (batteryPercent == 0){
        bottom.style.backgroundColor = "white";
        middle.style.backgroundColor = "white";
        up.style.backgroundColor = "white";
    }
    else if (batteryPercent == 2){
        bottom.style.backgroundColor = "red";
        middle.style.backgroundColor = "white";
        up.style.backgroundColor = "white";
    }
    else if (batteryPercent == 4){
        bottom.style.backgroundColor = "yellow";
        middle.style.backgroundColor = "yellow";
        up.style.backgroundColor = "white";
    }
    else if (batteryPercent == 6){
        bottom.style.backgroundColor = "green";
        middle.style.backgroundColor = "green";
        up.style.backgroundColor = "green";
    }
    console.log(batteryPercent); 
    return
     
}
    
    
