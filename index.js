function countdown(callback){
  setTimeout(callback, 2000);
}

function multiplierValue(value){
  return function(num) {
    return num * value
  }
}

function createMultiplier(val){
  return multiplierValue(val)
}


function multiplier(a, b){
  return a * b;
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);

console.log(doublerWithBind(5));
