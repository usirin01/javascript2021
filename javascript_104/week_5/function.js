/**
 * Firstly, we created one function about increase of battery,
 * Secondly, we created one function about decrease of battery,
 */

function chargeBattery(){
    if (batteryPercent < 8){
        batteryPercent ++
    }

    console.log(batteryPercent); 
}

function dechargeBattery(){
    if (batteryPercent > 0){
        batteryPercent --
    }

    console.log(batteryPercent);  
}

function changeBatteryColor(){
    if (batteryPercent == 0){
        document.getElementById("row-3").style.backgroundColor = "white";
        document.getElementById("row-2").style.backgroundColor = "white";
        document.getElementById("row-1").style.backgroundColor = "white";
    }
        
}
changeBatteryColor();
    
    
