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
  return n.toString().split("").reverse().map(Number);
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

// console.log(lovefunc(3, 2));

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

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
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

function weatherInfo(temp) {
  var c = convertToCelsius(temp);
  return c > 0
    ? c + " is above freezing temperature"
    : c + " is freezing temperature";
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9);
  return celsius;
}

// console.log(convertToCelsius(50));
// console.log(weatherInfo((50)));

// ========================================================================== //

/*
Factorial
Your task is to write function factorial
*/
function factorial(n) {
  if (n <= 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// console.log(factorial(7));

// ========================================================================== //

/*
Beginner - Reduce but Grow
Given a non-empty array of integers, return the result of multiplying the values 
together in order. 
Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/
function grow(x) {
  let sum = 1;
  for (let n of x) {
    sum *= n;
  }
  return sum;
}

// ========================================================================== //

/*
For Twins: 1. Types
Write a function that will accept two parameters: variable and type and check 
if type of variable is matching type. Return true if types match or false if not.
*/
function typeValidation(variable, type) {
  return typeof variable === type;
}

// console.log(typeValidation(null, 'object'));

// ========================================================================== //

/*
Breaking chocolate problem
Your task is to split the chocolate bar of given dimension n x m into small squares. 
Each square is of size 1x1 and unbreakable. Implement a function that will return 
minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single 
squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not 
have any chocolate to split). Input will always be a non-negative integer.
*/
function breakChocolate(n, m) {
  return n * m - 1 <= 0 ? 0 : n * m - 1;
}

// console.log(breakChocolate(5, 5));

// ========================================================================== //

/*
Remove anchor from URL
Complete the function/method so that it returns the url with anything after 
the anchor (#) removed.
Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url) {
  return url.split("#")[0];
}

// console.log(removeUrlAnchor("www.codewars.com/katas/?page=1#about"));

// ========================================================================== //

/*
Responsible Drinking!
Codewars Bar recommends you drink 1 glass of water per standard drink so you're 
not hungover tomorrow morning.
Examples
"1 beer"  -->  "1 glass of water"
because you drank one standard drink

"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks
 */
const hydrate = (s) => {
  let count = 0;
  for (let a of s) {
    if (a > 0) {
      count += +a;
    }
  }
  return count === 1 ? `${count} glass of water` : `${count} glasses of water`;
};

// console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer, 2 shots, 1 glass of wine, 1 beer"));

// ========================================================================== //

/*
Simple Fun #176: Reverse Letter
Given a string str, reverse it and omit all non-alphabetic characters.
Example
For str = "krishan", the output should be "nahsirk".
For str = "ultr53o?n", the output should be "nortlu".
 */
function reverseLetter(str) {
  return str.replace(/[^A-Za-z]/g, "").split("").reverse().join('');
}

// console.log(reverseLetter("ultr53o?n"));

// ========================================================================== //

/*
V A P O R C O D E
Write a function that converts any sentence into a V A P O R W A V E sentence. 
a V A P O R W A V E sentence converts all the letters into uppercase, 
and adds 2 spaces between each letter (or special character) to create 
this V A P O R W A V E effect.
Examples
"Lets go to the movies" -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
 */
function vaporcode(string) {
  return string.replace(/[^A-Za-z]/g, "").toUpperCase().split('').join("  ");
} 

// console.log(vaporcode("Lets go to the movies"));

// ========================================================================== //

/*
Highest and Lowest (7)
In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.
Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
 */

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return Math.max(...numbers) + ' ' + Math.min(...numbers);
}

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// ========================================================================== //