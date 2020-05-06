/*
Day 5 30 days of code

Day 5: NO_7
It is 2006, and you are using a nokia 3310; space impact is still the best game in the world. Mid game, your mum asks you to text(SMS not whatsapp for some of you kids) a long string of numbers to you dad(I don’t know why she would send numbers either) on her behalf since the battery to her phone is low. Normally, this would have been fine. But there is one problem. Your button “7” is not working, and there are a bunch of “7” all over this given number. But there is a solution. You can just send him a text with two different sets of numbers both lacking 7s that he can add together himself(Bomblocat can’t you call?). 
 
Task:
Write a function that takes in an integer and returns an array containing two integers that when added together gives the number your mum asked you to text.

Example:
noSeven(70)===[50,20]//50+20 is 70
noSeven(717)===[506,211]//506+211 is 717

Note there are multiple solutions/approaches to solving this. I will be grading based on cleanliness of code, speed of execution as compared to my solution and of course correctness of solution.

My test cases would be large integers which would highlight differences in performance. So ensure to put some thought into your solution.

Created on Tue May 5 11:45:32PM 2020

@author: Oluwayelu Ifeoluwa
*/
const noSeven = num => {
    var num1 = Math.floor(Math.random() * num)
    var num2 = num - num1
    var arr = [num1, num2]
    
    var cond = arr.every(a => {
        return (!a.toString().includes('7'))
    })

    if(cond){
        return arr
    }
    return noSeven(num)
}


//test: Note solution could be different from others
console.log(noSeven(70)) //[29, 41]
console.log(noSeven(717)) //[669, 48]