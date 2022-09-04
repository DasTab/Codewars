/**
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number 
within an array in reverse order.
Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

function digitize(n) {
  //code here
  return n.toString().split('').reverse().map(Number);
}

// console.log(digitize(32231));

// ========================================================================== //

/* 
Opposites Attract
Timmy & Sarah think they are in love, but around where they live, 
they will only know once they pick a flower each. If one of the flowers 
has an even number of petals and the other has an odd number of petals 
it means they are in love.
Write a function that will take the number of petals of each flower 
and return true if they are in love and false if they aren't.
*/

function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1;
}

// console.log(lovefunc(1, 1));

// ========================================================================== //

/*
Build a square
I will give you an integer. Give me back a shape that is as long and wide 
as the integer. The integer will be a whole number between 1 and 50.
Example
n = 3, so I expect a 3x3 square back just like below as a string:
*/

function generateShape(integer) {
  let square = "";
  for (let i = 0; i < integer; i++) {
    for (let j = 0; j < integer; j++) {
      square += "+";
    }
    square += "\n";
  }
  return square.slice(0, -1);
}

// console.log(generateShape(8));

// ========================================================================== //

/* 
Reversed Words
Complete the solution so that it reverses all of the words within 
the string passed in.
Example(Input --> Output):
"The greatest victory is that which requires no battle" --> 
"battle no requires which that is victory greatest The"
*/

function reverseWords(str){

  return str.split(' ').reverse().join(' ');
}

// console.log(reverseWords('Hello world!'));

// ========================================================================== //

/*
Debug celsius converter
Your friend is traveling abroad to the United States so he wrote a program 
to convert fahrenheit to celsius. Unfortunately his code has some bugs.

Find the errors in the code to get the celsius converter working properly.

To convert fahrenheit to celsius:

celsius = (fahrenheit - 32) * (5/9)
*/

function weatherInfo (temp) {
  var c = convertToCelsius(temp);
  return (c > 0) ? (c + " is above freezing temperature") : (c + " is freezing temperature");

}

function convertToCelsius (temperature) {
  var celsius = (temperature - 32) * (5/9);
  return celsius;
}

// console.log(convertToCelsius(50));
// console.log(weatherInfo((50)));

// ========================================================================== //

