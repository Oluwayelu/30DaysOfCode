 /*
Day 4 of 30 Days of Code

There is an urgent need for prime numbers. Write a function that takes in an integer and returns an array containing all the prime numbers between 1 and the given input. Algorithmic efficiency(lower time of computation) is needed for full points.

Example:
OptimusPrime(11)===[2, 3, 5, 7, 11]

Created on Mon May 4 11:39:06PM 2020

@author: Oluwayelu Ifeoluwa
*/

const optimusPrime = num => {
    var store = [], primes = []
    
    for (var i = 2; i <= num; ++i){
        if(!store[i]){
            primes.push(i)
            for (var j = i << 1; j <= num; j += i){
                store[j] = true
            }
        }
    }
    return primes
}

//test
console.log(optimusPrime(11)) //[2,3,5,7,11]