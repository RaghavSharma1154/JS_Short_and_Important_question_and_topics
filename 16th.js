//Cut array length -->
let data = [1,4,7,4,1,8,2,9,7];
// data.length = 3;//fixing the length 3;
// console.log(data);//[1,4,7]

//calculating the sum of all elements in array -->
let sum = data.reduce((a,b)=>a+b);
// console.log(sum);//43

//Remove the duplicate values from array --> Using Set()
let unique = new Set(data);
// console.log(unique);//{1,4,7,8,2,9}
// console.log([...unique]);//[1,4,7,8,2,9]

//comma Operator -->
//In ans = (x+=10,y) the x+=10 will be calculated but after the printing ans the value of y will logged to console
let x = 10;
let y = 40;
let ans = (x+=10,y);
// console.log(ans);//40
// console.log(x);//20

//Swapping using Destructuring -->
let a = 9, b = 5;
[a,b] = [b,a];
console.log(a,b); //5,9