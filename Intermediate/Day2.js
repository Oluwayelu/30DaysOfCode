/*
Day 2 of 30 Days of Code

Task:
Write a function that takes in a positive integer parameter and returns the number of times you must multiply the digits in num until you reach a single digit.

Example :
myFunction(43)===2   //(because 4*3=12,1*2=2)

Created on Sat May 2 7:34:23PM 2020

@author: Oluwayelu Ifeoluwa
*/

const singleToStupor = num => { 
    if(num.toString().length === 1) {
        return 0
    }
    const newNum = num.toString().split('').reduce((a, b) => a * b, 1)
    return 1 + singleToStupor(newNum)
}

//test
console.log(singleToStupor(43)) //2
