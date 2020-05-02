 /*
Day 2 of 30 Days of Code

A palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam

Task:
Write a function that checks is a given string matches its reverse Input: The string to be checked.

Example:
myFunction('Howdy')

Output:
A boolean value.

Example:
myFunction('Howdy')===false
myFunction('madam')===true

Created on Fri May 1 11:06:40AM 2020

@author: Oluwayelu Ifeoluwa
*/
const palindrome = value => {
    let regex = /[\W_]/g;
    value = value.toLowerCase().replace(regex, "")
    value === value.split("").reverse().join("") ? console.log(true) : console.log(false)
}

//test
palindrome("Howdy") //false
palindrome("madam") //true