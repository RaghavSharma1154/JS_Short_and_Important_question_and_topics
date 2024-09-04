//High Order Functions --> High Order function are the functions are the functions which takes
//a function as a parameter or returns a function or does both

//Default High order functions ex --> map filter reduce etc
//Example -->
// let data = [2,45,3,21];
// const res = data.map((item)=>item*10);
// console.log(res);

//Custom High Order Functions -->
//Example 1 -->
// let data = 9;
// Number.prototype.customFunc = function(fun){
//     return fun(data);
// }
// console.log(data.customFunc((x)=>x*10));//90

//Example 2-->
// let data = [12,2,4,9,24];
// Array.prototype.customFunc = function(fun){
//     const res = [];
//     for(let i=0;i<this.length;i++){
//         res.push(fun(this[i]));
//     }
//     return res;
// }
// console.log(data.customFunc((val)=>{
//     return val * 10;
// }));//[ 120, 20, 40, 90, 240 ]
