/*
Day 3 of 30 Days of Code

Task: Everything is Packaging
Write a function that takes in two integer parameters. The first parameter is the required size(number of digits), while the second parameter is the number which would be formatted by adding leading zeros to meet the required size specified by the first parameter. The function returns the newly formatted number with the leading zeros added in form of a string. If the required number of digits is less than the number of digits the second parameter contains, return as is.

Example:
myPackaging(5,22)===’00022’ 

Created on Sun May 3 11:49:03PM 2020

@author: Oluwayelu Ifeoluwa
*/

const packaging = (size, num) => {
    if(num.toString().length >= size){
        return num.toString()
    }
    return "0".repeat(size - num.toString().length) + num.toString()
}

//test
console.log(packaging(5,22)) // 00022