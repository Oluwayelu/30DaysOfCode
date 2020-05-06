/*
Day 5 30 days of code

Day 5 (Aberration day 1): Playing with triangles
A triangle number is a number where n objects form an equilateral triangle. For example, 6 is a triangle number because you can arrange 6 objects into an equilateral triangle:
  1
 2 3
4 5 6

8 is not a triangle number because 8 objects do not form an equilateral triangle:
   1
  2 3
 4 5 6
7 8

In other words, the nth triangle number is equal to the sum of the n natural numbers from 1 to n.

Task:
Write a function that checks if a given input is a valid triangle number. Return true if it is, false if it is not (note that any non-integers, including non-number types, are not triangle numbers).

Example:
Triangle_no(6)===true;
Triangle_no(8)===false;

Assumptions:
You may assume that the given input, if it is a number, is always positive.

Notes:
0 and 1 are triangle numbers.

Created on Tue May 5 11:43:20PM 2020

@author: Oluwayelu Ifeoluwa
*/


const triangleNum = num => {
    var sum = 0, arr = []

    for(var i =1; i <= num/2; i++){
        arr.push(sum += i)
    }
    return arr.includes(num)
}

console.log(triangleNum(6))
console.log(triangleNum(8))