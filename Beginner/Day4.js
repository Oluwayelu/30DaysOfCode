 /*
Day 4 of 30 Days of Code

Task:
Write a function that takes in a single word string mixed with both upper and lower case characters and returns it as a larger string made up of all its characters in upper case and all its characters in lower case separated by a comma and a space. 

Input:
A string. 

Example:
Cstrings("HasTaLAvisTA")

Output:
String. 

Example:
Cstrings("HasTaLAvisTA")==="HASTALAVISTA, hastalavista"

Created on Mon May 4 11:39:06PM 2020

@author: Oluwayelu Ifeoluwa
*/

const confusedStrings = str => {
    return str.toUpperCase() + ', ' + str.toLowerCase()
}

//test
console.log(confusedStrings("HasTaLAvisTA")) //HASTALAVISTA, hastalavista