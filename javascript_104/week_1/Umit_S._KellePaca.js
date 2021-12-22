/**
 * Firstly, we create one array about number of animals
 * Secondly, we determine number of animals
 * Thirdly, we identify and select appropriate animals
 * Lastly, we write the number of feet of the appropriate animals
 */

//list of animals,
let animals = ["cow", "cow", "chicken", "sheep", "pig", "sheep", "sheep" ];

//we are determining number of animals in this section,
let numberOfCows = animals.filter(i => i == "cow").length;
let numberOfSheep = animals.filter(i => i == "sheep").length;
let numberOfChicken = animals.filter(i => i == "chicken").length;
let numberOfPig = animals.filter(i => i == "pig").length;

//we are identifing and selecting appropriate animals,
function findHalalFeet(halal1, halal2){
    var halalFeet = (halal1 + halal2)*4;
    
    return halalFeet;
}

//we are writing the number of feet of the appropriate animals in this part.
let necipUstaWish = findHalalFeet(numberOfCows,numberOfSheep);
console.log("Total number of halal animals's feet-->" + necipUstaWish);





