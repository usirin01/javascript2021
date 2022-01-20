/**
 * Firstly, we created one function about increase of battery,
 * Secondly, we created one function about decrease of battery,
 */

let batteryPercent = 0

let bottom = document.getElementById("row-3").style.backgroundColor = "red"  ;
let middle = document.getElementById("row-2").style.backgroundColor = "yellow";
let up = document.getElementById("row-1").style.backgroundColor = "green";

let increaseBattery = document.getElementById("plus");
let decreaseBattery = document.getElementById("minus");

increaseBattery.addEventListener("click", chargeBattery);
//decreaseBattery.addEventListener("click", dechargeBattery);

