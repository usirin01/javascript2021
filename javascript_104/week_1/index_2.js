/**
 * Firstly, we create one array about spare part for cars,
 * We determine several functions for changing some information in the array,
 * Part names will be capitalized,
 * Numbers will be subtracted from the part names,
 * Part names will be reversed,
 * KEREMAG_ will be added to the beginning of each piece,
 * Lastly, at the end of each piece, the date the piece was entered into the system will be added,
 * We will show last array to console,
 * The program ending.
 */

// we were created one array about spare part for cars,
let sparePart = ["Kaporta5", "Akü",  "Stop Lambasi", "Radyatör 21", "Karbüratör 42", "Tekerlek", "3 AYNA", "Jant"];

// We determine several functions in this area;

//Transform to upperCase

let newArr = sparePart.map((xName) => xName.toUpperCase())

console.log(newArr);

//Numbers will be subtracted from the part names,

let newArr1 =  newArr.map(function removeArray(yName){
    
    return yName.replace(/[0-9]/g,"");
})

console.log(newArr1);

//Part names will be reversed,

let newArr2 = newArr1.map(function reverseArray(zName){
  // string values doesnt have reverse feature. Therefore, we firstly changed to array (.split)
  // array has reverse feature. Than, we reversed every array element. Finnally, we changed the array to string(.join(""))       
    return zName.split("").reverse().join("");
  
})

console.log(newArr2);

//KEREMAG_ will be added to the beginning of each piece,

let newArr3 = newArr2.map(function addName(tName){
   
    return "KEREMMAG_" + tName;
})

console.log(newArr3);

//Login Date was added,

let newArr4 = newArr3.map(function addName(pName){
   
    return pName + "login date" + Date();
})

console.log(newArr4);











