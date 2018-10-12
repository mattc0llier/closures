const { increase, double, total, gibberish, mergeSort, calculator, dogHome } = require('../src/index.js');

test('increase', function(){
  const arg = 10;
  const inner = increase();
  const result = inner(arg);

  const expected = 13;

  expect(result).toBe(expected);
});

test('double', function(){

  const inner = double();
  const result = inner();
  const expected = 2;

  expect(result).toBe(expected);
});

test('total', function(){
  const arr = [ 1 , 2 , 3 ];
  const input = 4
  const inner = total(input);
  const result = inner(arr);
  const expected = 10;

  expect(result).toBe(expected);
});

test('gibberish', function() {
  const input = "one";
  const inner = gibberish();
  const result = inner(input);
  const expected = "one ";

  expect(result).toBe(expected);

});

test('gibberish2', function() {
  const input = ["two", "three", "four"];
  const inner = gibberish();
  const result = inner(input);
  const expected = " two three four.";

  expect(result).toBe(expected);

});

test('mergeSort', function(){
  const num = 6
  const inner = mergeSort()
  const result = inner(num)

  const expected = 6

  expect(result).toBe(expected);

  const num2 = 8
  const result2 = inner(num2)

  const expected2 = 8

  expect(result2).toBe(expected2);

  const num3 = 4
  const result3 = inner(num3)

  const expected3 = 8

  expect(result3).toBe(expected3);
});

test('calculator', function() {
  const num1 = 3;
  const num2 = 8;
  const op = "*";
  const inner = calculator();
  const result = inner(num1, num2, op);

  const expected = 24;

  expect(result).toBe(expected);

});

test('dogHome', function() {
  const dog = {
    name: "harry",
    breed: "alsation",
    colour: "pink",
    location: "afganistan"
  };

  const houseDog = dogHome();
  const result = houseDog(dog);

  const expected = {
    afganistan: [{
      name: "harry",
      breed: "alsation",
      colour: "pink",
      location: "afganistan"
  }]
  };

  expect(result).toEqual(expected);

  const dog2 = {
    name: "jim",
    breed: "sausage dog",
    colour: "blue",
    location: "afganistan"
  };

  const result2 = houseDog(dog2);

  const expected2 = {
    afganistan: [
      {
        name: "harry",
        breed: "alsation",
        colour: "pink",
        location: "afganistan"
      }, {
        name: "jim",
        breed: "sausage dog",
        colour: "blue",
        location: "afganistan"
      }]
  };

  expect(result2).toEqual(expected2);


});
