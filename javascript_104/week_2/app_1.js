/**
 * 1.We determine one year for start the program,
 * 2.We ask to users "what is your birthday",
 * 3.We calculate users birthday (mod 12),
 * 4.According to the remainder of the division operation, the relationship with the array values is established,
 * 5.We print the result to the screen and finish the program.
 * 
 */
let animalList = [ "Monkey", "Rooster", "Dog", "Pig",  "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"];

let elementName = ["Water", "Wood", "Fire", "Earth", "Metal", ];



function showMyZodiac(){

    let year = document.getElementById("oneyear").value;

    if(year % 12 == animalList.indexOf("Monkey")){
          document.getElementById("result").innerHTML = "Your Zodiac: Monkey" + "Your Element: Water";
    } 

    if(year % 12 == animalList.indexOf("Rooster")){
        document.getElementById("result").innerHTML = "Your Zodiac: Rooster" + "Your Element: Water";
    } 

    if(year % 12 == animalList.indexOf("Dog")){
        document.getElementById("result").innerHTML = "Your Zodiac: Dog" + "Your Element: Wood"
    }

    if(year % 12 == animalList.indexOf("Pig")){
        document.getElementById("result").innerHTML = "Your Zodiac: Pig" + "Your Element: Wood"
    }

    if(year % 12 == animalList.indexOf("Rat")){
        document.getElementById("result").innerHTML = "Your Zodiac: Rat" + "Your Element: Wood";
    }

    if(year % 12 == animalList.indexOf("Ox")){
        document.getElementById("result").innerHTML = "Your Zodiac: Ox" + "Your Element: Wood";
    }

    if(year % 12 == animalList.indexOf("Tiger")){
        document.getElementById("result").innerHTML = "Your Zodiac: Tiger" + "Your Element: Fire";
    }

    if(year % 12 == animalList.indexOf("Rabbit")){
        document.getElementById("result").innerHTML = "Your Zodiac: Rabbit" + "Your Element: Fire";
    }

    if(year % 12 == animalList.indexOf("Dragon")){
        document.getElementById("result").innerHTML = "Your Zodiac: Dragon" + "Your Element: Earth";
    }

    if(year % 12 == animalList.indexOf("Snake")){
        document.getElementById("result").innerHTML = "Your Zodiac: Snake" + "Your Element: Earth";
    }

    if(year % 12 == animalList.indexOf("Horse")){
        document.getElementById("result").innerHTML = "Your Zodiac: Horse" + "Your Element: Metal";
    } 

    if(year % 12 == animalList.indexOf("Sheep")){
        document.getElementById("result").innerHTML = "Your Zodiac: Sheep" + "Your Element: Metal";
    }

}


