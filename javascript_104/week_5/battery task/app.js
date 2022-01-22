/**
 * we created variables
 */
var batteryPercent = 0; 

var bottom = document.getElementById("row-3");
var middle = document.getElementById("row-2");
var up = document.getElementById("row-1");

var increaseBattery = document.getElementById("plus");
var decreaseBattery = document.getElementById("minus");

increaseBattery.addEventListener("click", chargeBattery);
decreaseBattery.addEventListener("click", dechargeBattery);

