// 1: // function fruit(){
//     console.log(name);//undefined
//     console.log(price);//error
//     var name = 'apple';
//     let price = 56; 
// }
// fruit();

// for(let i=0;i<3;i++){
//     setTimeout(()=>console.log(i),1);
// }//the output will be 0,1,2

// for(var i=0;i<3;i++){
//     setTimeout(() => console.log(i), 1);
// }//3,3,3

// console.log(+true);//1
// console.log(typeof +true);//number
// console.log(!"dev");//false

// let data = 'size';
// const bird = {
//     size : 'small'
// }
// console.log(bird[data]);//small
// console.log(bird.size);//small
// console.log(bird["size"]);//small
// console.log(bird.data);//error

// var x;
// let x = 10;
// console.log(x);//error

// let a= 3;
// let b = new Number(3);
// console.log(a==b);//true
// console.log(a===b);//false

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,"4"));//24

// function getAge(){
//     'use strict';
//     age = 21;
//     console.log(age);//error
// }
// getAge();

