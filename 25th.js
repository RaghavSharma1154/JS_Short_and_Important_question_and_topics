//String Questions -->
let str = "Hello How are you";

//convert string into array-->
// console.log(str.split());//['Hello How are you]

//convert string into array with each element -->
// console.log(str.split('')); 
//output -->
//[
//     'H', 'e', 'l', 'l', 'o',
//     ' ', 'H', 'o', 'w', ' ',
//     'a', 'r', 'e', ' ', 'y',
//     'o', 'u'
//   ]

//convert string into array where element are seperated with white spaces in string-->
// console.log(str.split(" "));//[ 'Hello', 'How', 'are', 'you' ]

//Replace any character in string-->
// console.log(str.replace('H' ,'h'));//hello How are you [It will only replace the first H ]
// console.log(str.replace(/H/g,'h'));//hello how are you

//Substring from a string-->
// console.log(str.substring(0,5));//Hello

//Reverse a string-->
console.log(str.split('').reverse().join(''));//uoy era woH olleH

//remove the white spaces from front and last -->
let st = "   hi       ";
// console.log(st.trim());//hi

