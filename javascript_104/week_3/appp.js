const groupList = ["Rangers", "Raiders", "Wilds", "Canaries", "Bears"];
const personalList = ["Bowie", "Boyd", "Aaron-James", "Aarron",
"Aaryan", "Aaryn", "Conner", "Connolly", "Fauzaan", "Favour",
"Fawaz", "Fawkes", "Connor", "Aayan", "Bracken", "Brad"];

function secbirlestir(group, personal){
  let groupLength = group.length;
  let yenigroup = [];
  for(let index = 0; index < groupLength; index++){
      yenigroup[index] = group[index] +" "+ personal[Math.floor(Math.random()*personalList.length)]
  }
return yenigroup
}
console.log(secbirlestir(groupList, personalList))