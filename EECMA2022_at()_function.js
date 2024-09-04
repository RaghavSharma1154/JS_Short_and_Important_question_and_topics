//.at() function --> .at function is a new feature of ECMA 2022 which calculates the length 
//of an array from both sides.It has a better performance.

//Application of .at() function --> let we have a large sized array and we have to get its 
//last element if we do -->
let data = [12,23,4,4,32,54,2,434,53,2,3];
// console.log(data[data.length-1]);//take a long time
//it will take a long time to get the last element because first it will calculate the length 
//of array and then the last element so to overcome this problem we can use the .at() function
console.log(data.at(-1));//better performance
console.log(data.at(-3));//last third element