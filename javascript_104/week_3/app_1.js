/**
 * Firstly,we are determine one array,
 * We choose name in the two array but seperatly,
 * Than we collect and write in the one new determined array,
 * Show the console and program ending.
 */

 const groupList = ["Rangers", "Raiders", "Wilds", "Canaries", "Bears"];

 const personalList = ["Bowie", "Boyd", "Aaron-James", "Aarron","Aaryan", "Aaryn", "Conner", "Connolly", "Fauzaan", "Favour",
 "Fawaz", "Fawkes", "Connor", "Aayan", "Bracken", "Brad"];

 //We create our function

 function chooseNewArray(pGroup, pPersonal){

    let newGroup = [];
    let groupLength = pGroup.length;
    
    for(let index = 0; index < groupLength; index++){
        newGroup [index] = pGroup[index] +" "+ pPersonal[Math.floor(Math.random()*personalList.length)]
    }
  return newGroup 
  }
  //Show the console
  console.log(chooseNewArray(groupList, personalList));
