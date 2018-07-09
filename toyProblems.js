
//Write function avg which calculates average of numbers in given list.
function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}


/*Description:

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
*/
function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}


/*
Description:

The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

cockroachSpeed(1.08) == 30

Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

*/
function cockroachSpeed(s) {
  return Math.floor(s * 100000 / 60 / 60);
}



/*
Description:

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12

Notes:

    The number can be negative already, in which case no change is required.
    Zero (0) can't be negative, see examples above.
*/
function makeNegative(num) {
  if ( num > 0 ) {
        return -num;
    }
    else {
        return num;
    }
}



/*
Description:

Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
*/

function combat(health, damage) {
  return health < damage ? 0 : health - damage
}



/*
Description:
Introduction

The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
Task :

Given a year, return the century it is in.
Input , Output Examples ::

centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
*/

const century = year => Math.ceil(year/100)

/*
Description:

Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".
*/

const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"



/*
Write a function that takes in a number and returns an array of factors for that number
*/

const factors = num => {
  const newArr = [];
  for(let i = 1; i <= num; i++){
    if(num%i === 0){
      newArr.push(i);
    }
  }
  return newArr;
}


/*Description:

If you can't sleep, just count sheep!!
Task:

Given a number, 3 for example,

return a string with a murmur: "1 sheep...2 sheep...3 sheep..."*/

var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}

