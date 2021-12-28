/**
 * 1.We determine one year for start the program,
 * 2.We ask to users "what is your birthday",
 * 
 */
let animalList = [ "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep", "Monkey", "Cock", "Dog", "Boar",];
let elementName = ["Metal", "Water", "Wood", "Fire", "Earth"];



function showMyZodiac(){

    let year = document.getElementById("oneyear").value;

    if(year % 12 == animalList.indexOf("Rat")){
          document.getElementById("result").innerHTML = "Rat"
    } 

    if(year % 12 == animalList.indexOf("Ox")){
        document.getElementById("result").innerHTML = "Ox"
    } 

    if(year % 12 == animalList.indexOf("Tiger")){
        document.getElementById("result").innerHTML = "Tiger"
    }

    if(year % 12 == animalList.indexOf("Rabbit")){
        document.getElementById("result").innerHTML = "Rabbit"
    }

    if(year % 12 == animalList.indexOf("Dragon")){
        document.getElementById("result").innerHTML = "Dragon"
    }

    if(year % 12 == animalList.indexOf("Snake")){
        document.getElementById("result").innerHTML = "Snake"
    }

    if(year % 12 == animalList.indexOf("Horse")){
        document.getElementById("result").innerHTML = "Horse"
    }

    if(year % 12 == animalList.indexOf("Monkey")){
        document.getElementById("result").innerHTML = "Sheep"
    }

    if(year % 12 == animalList.indexOf("Snake")){
        document.getElementById("result").innerHTML = "Monkey"
    }

    if(year % 12 == animalList.indexOf("Snake")){
        document.getElementById("result").innerHTML = "Cock"
    }

    if(year % 12 == animalList.indexOf("Snake")){
        document.getElementById("result").innerHTML = "Dog"
    }

    if(year % 12 == animalList.indexOf("Snake")){
        document.getElementById("result").innerHTML = "Boar"
    }

}


