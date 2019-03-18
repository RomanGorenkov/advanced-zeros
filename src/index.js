module.exports = function getZerosCount(number, base) {
  // your implementation

  let divers = getArrayOfDivers(base);
  let arrayLast = divers.length -1;
  let powers = getPowerOfDivers(divers,number);
  let count = getCountOfZero(powers,divers,base);
  let maxCount = count.indexOf( Math.max.apply(null, count));
  let maxIndex = 0;
  divers[arrayLast] < count[maxCount]*divers[maxCount] ? maxIndex = maxCount : maxIndex = arrayLast;
  if (count[arrayLast] >= divers[maxIndex]){
    if(count[arrayLast] != 1){
      return Math.floor(powers[arrayLast] / count[arrayLast]);
    }
    return powers[arrayLast];
  }
  else{
    if(powers[maxIndex]/count[maxIndex] > powers[arrayLast]){
      return powers[arrayLast];
    }
    return Math.floor(powers[maxIndex] / count[maxIndex]);
  }

  }
  

function getArrayOfDivers(base){
  var divers = [];

  nextPrime:
  for (var i = 2; i <= base; i++) { 

    if(i == 2 && base % i != 0) continue nextPrime;

    for (var j = 2; j < i; j++) {
      if (i % j == 0 || base % i != 0) continue nextPrime;
    }

    divers.push(i);
  }
  return divers;
}

function getPowerOfDivers(arrayOfDivers,number){
    let powerOfDivers = new Array(arrayOfDivers.length)
    for(let i =0; i < powerOfDivers.length; i++){

      let k = 0;
      powerOfDivers[i] = 1;

      while (true)
      {
        powerOfDivers[i] *= arrayOfDivers[i];
        let addend = Math.floor( number / powerOfDivers[i]);
        if ((addend ^ 0) === 0){
          powerOfDivers[i] = k;
          break;
        }
          
        k += addend;
      }
    }
    return powerOfDivers;
}

function getCountOfZero(arrayOfPowers,arrayOfDivers,base){
  let countToBase = new Array(arrayOfPowers.length);

  
  for(let i = 0; i < countToBase.length;i++){
    let k = 0;
    let baseFoDiver = base;
    while(true){
      baseFoDiver = baseFoDiver / arrayOfDivers[i]
      if((baseFoDiver ^ 0) !== baseFoDiver) break;
      k++
    }
    countToBase[i] = k;
  }


  return countToBase;
}









  

