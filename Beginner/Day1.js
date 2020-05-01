 /*
Day 1 of 30 Days of Code

Write a function that takes in an integer as a parameter and returns the number of possible divisors the number including 1 and but excluding itself.

Example:
myFunction(10)===3; //10 is divisible by 1,2,5

Created on Fri May 1 11:06:40AM 2020

@author: Oluwayelu Ifeoluwa
*/

const divisor = num => {
    var div = 0
    for(var i = 1; i < num; i++) {
        if(num%i == 0){
            div += 1
        }
    }
    return div
}

//test
console.log(divisor(10)) //3