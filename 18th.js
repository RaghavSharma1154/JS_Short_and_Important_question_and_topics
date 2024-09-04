//eval() function evaluates the values which was passed as parameters -->
// const ans = eval('3*8+9');//33
// console.log(ans);

// sessionStorage.setItem('secret',9520);
//How long is 'secret' is accessible-->It will stored till we did not close the tab/browser

// const obj = {
//     1 : 'a',
//     2: 'b',
//     3 : 'c'
// }
// console.log(obj.hasOwnProperty(1));//true
// console.log(obj.hasOwnProperty('1'));//true
//If we has a numeric key and we want to check that key is present in object or not 
//than we can pass that key in form of string or number in .hasOwnProperty() method
//but if the key's type is string than we can not check that key in form of number

// const obj = {a:'one',b:'two',a:'repeat'};
// console.log(obj);//{a:'repeat',b:'two'}
//if we have an object where two keys has same name but different value than the second same 
//key will overwrite the first same key but the position of key will not change

// const person = {name:'lydia'};
// function sayHi(age){
//     return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person,45));//lydia is 45
// console.log(sayHi.bind(person,23));//function : bound sayHi
// console.log(sayHi.bind(person,23)());//lydia is 23
//when we call a function with .call method it simply call the function with passed object
//but when we call a function with .bind() method it returns another object bound with the
//object passed and we can call that returned function whenever needed 

// function fun(){
//     return function(){return 23}();//Immediate Invoked
// }
// console.log(typeof fun())//number
//this will log number because the fun() function is returning a function which is returning
//a number and the returned function is immediately invoked so overall fun() function is
//returning a number
