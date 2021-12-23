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

let newArr = sparePart.map(function(x){ 
    
    return x.toUpperCase(); 
});

console.log(newArr);

//Numbers will be subtracted from the part names

let newArr1 =  newArr.map(function removeArray(y){
    
    return y.replace(/[0-9]/g,"");
})

console.log(newArr1);

//Part names will be reversed,

let newArr2 = newArr1.map(function reverseArray(z){
         
    return z.split("").reverse().join("");
})

console.log(newArr2);

//KEREMAG_ will be added to the beginning of each piece,

let newArr3 = newArr2.map(function addName(t){
   
    return "KEREMMAG_" + t;
})

console.log(newArr3);

//Login Date was added,

let newArr4 = newArr3.map(function addName(p){
   
    return p + "login date" + Date();
})

console.log(newArr4);











