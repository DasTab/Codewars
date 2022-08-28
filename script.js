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