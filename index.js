
// dwarves = ["doc", "dopey", "sneezy", "grumpy"]
function dwarfRollCall(dwarves) {
  var dwarvesArray = [];
  
  for (let i = dwarves.length / 2; i >= 0; i++) {
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




// wordsWithB([ "apple", "boat", "beans" ]) => return [ "boat", "beans" ] <- start with "b"
function wordsWithB(arr) {
  let newArray = [];
  
  for( let i = 0; i < arr.length; i++) {
    let arrayB = arr[i]; // "apple"
    
    let newArrayB = arrayB.split(""); // [ "a", "p", "p", "l", "e"]
    
    
    if(newArrayB[0] === "b"){
      newArray.push(arrayB);
      
    }
  }
  return newArray;
}
