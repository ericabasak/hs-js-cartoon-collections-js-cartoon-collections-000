

function dwarfRollCall(dwarves) {
  var dwarvesArray = [];
  
  for (let i = 0; i < dwarves.length; i++) {
    dwarvesArray.push(`${i + 1}. ${dwarves[i]}`)
    }
    return `${dwarvesArray.join(" ")} `;
}




function summonCaptainPlanet(planeteerCalls){
  let captainArray = [];
  
  for (let i = 0; i < planeteerCalls.length; i++) {
    captainArray.push(`${planeteerCalls[i].toUpperCase()}!`);
  }
  return captainArray;
}





function longPlaneteerCalls(words) {
  let planeteerArray = false;

    for (let i = 0; i < words.length; i++) {
        if (planeteerArray = true && words[i].length > 4) {
        }
    }
    return planeteerArray;
}






function findTheCheese (foods) {
 let cheese = ["cheddar", "gouda", "camembert"];
 
 for (let i = 0; i < foods.length; i++) {
   for (let j = 0; j < cheese.length; j++) {
     if (foods[i] === cheese[j]) {
     return foods[i];
     }
   }
 }
 return "no cheese!";
}
