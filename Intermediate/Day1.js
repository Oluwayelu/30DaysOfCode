 /*
Day 1 of 30 Days of Code

Write a function in the form of scrabble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Example:
scrabble(‘jigokuhen’,’jigen’)===true
scrabble(‘i am rain’,’raining’)===false

Created on Fri May 1 11:10:53AM 2020

@author: Oluwayelu Ifeoluwa
*/

const scrabble = (str1, str2) => {
    var [arr1, arr2] = [str1.split(''), str2.split('')]
    return arr2.every(x => arr1.indexOf(x) === -1 ? false : arr1.splice(arr1.indexOf(x), 1))
}

//test
console.log(scrabble('jigokuhen', 'jigen')) // true
console.log(scrabble('i am rain','raining')) // false