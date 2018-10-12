// Create a function which stores a number. Return an inner function which accepts a number as an argument, adds it to the number in parent scope and returns the new total

function increase(){

  let number = 3;

  function inner(newNumber){
    number = newNumber + number;
    return number;
  }

  return inner;
}

function double(){

  let number = 1;

  function inner(){
    number =  number * 2;
    return number;
  }

  return inner;
}

function total(input) {
  let totally = input;
  // console.log(typeof input);

  function inner(arr){
    const arrayTotal = arr.reduce((acc, cur) => {
      return acc + cur;
    }, 0)
    // console.log(arrayTotal)
    // console.log(totally)
    totally = arrayTotal + totally;
    return totally
  }
  return inner;
}

function gibberish() {
  string = "";
  function inner(input) {

    if (typeof input === "string") {
      string = `${input} ${string}`
    } else if (Array.isArray(input) ) {
      //console.log('array hit');
      stringArrJoined = input.join(" ");
      //console.log(stringArrJoined);
      string = `${string} ${stringArrJoined}.`
    }
    else {
      return null
    }

    return string
  }
  return inner
}

function mergeSort(){
  let arr = []

  function inner(num){
    const newArr = arr.concat(num)
    arr = newArr.sort(function(a, b){
      return b - a
    })
    const maxNum = arr[0]
    return maxNum
  }
  return inner
}

function calculator(){
  let total;

  function inner(num1, num2, op) {
    if (op = "*") {
      total = num1 * num2;
    } else if (op = "+") {
      total = num1 + num2;
    } else if (op = "-") {
      total = num1 - num2;
    } else if (op = "/") {
      total = num1 / num2;
    }
    return total
  }

return inner
}

function dogHome(){
  let dogsByLocation = {}
    function houseDog(dog){
      // console.log('dog.location', dog.location);
      Object.assign(dogsByLocation, {[dog.location]: [dog].concat([dog])} )
      // console.log('anObject', dogsByLocation);
      return dogsByLocation
    }

    function getDogsByLocation(location){
      console.log(dogsByLocation.location);
      return  dogsByLocation.location
    }

  return houseDog
}

exports.increase = increase
exports.double = double
exports.total = total
exports.gibberish = gibberish
exports.mergeSort = mergeSort
exports.calculator = calculator
exports.dogHome = dogHome
