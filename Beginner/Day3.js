 /*
Day 3 of 30 Days of Code

You have a box of sweets and you want to give them all away to a group of brothers and sisters. If you have enough left in the box to give them each evenly, you share it. If it is not enough, you keep it to yourself. 

Task:
Write a function that takes two integer arguments and determines if you can share the sweets evenly or not.

Input:
The inputs are integer values, the first one represents the number of siblings, and the second one represents the number of sweets  that you have left in the box. Example: Santa(3, 9)

Output:
A string that says 'give away' if you are giving them away, or 'eat them yourself' if you will be eating them yourself. 

Example: 
Santa(3,9)==='give away'
Santa(3,8)==='eat them yourself'

Created on Sun May 3 11:47:06PM 2020

@author: Oluwayelu Ifeoluwa
*/

const localSanta = (numOfSiblings, numOfSweets) => {
    if (numOfSweets % numOfSiblings === 0) {
        return "give away"
    }
    return "eat them yourself"
}

//test
console.log(localSanta(3,9)) // give away
console.log(localSanta(3,8)) // eat them yourself