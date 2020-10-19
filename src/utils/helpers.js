function* shuffle(array){
  var i = array.length
  while(i--) {
     yield array.splice(Math.floor(Math.random() * (i+1)), 1)[0];
  }
}
export function getRandomNumbers(array){
  const generator = shuffle(array);
  const randomNumbers = [];
  for (var i = 0; i < 6; i++) {
    randomNumbers.push(generator.next().value + 1);
  }
  return randomNumbers
}
export function getPayout(matches){
  switch(matches){
    case 0: return 0
    case 1: return 2.5
    case 2: return 10
    case 3: return 50
    case 4: return 100
    case 5: return 10000
    case 6: return 1000000
    default: return -1
  }
}
