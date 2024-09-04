// console.log(`${(x=>x)('I love')} to Program`);//I love to Program

// function sumVal(x,y,z){
//     return x+y+z;
// }
// console.log(sumVal(...[1,2,3]));

// const name = 'code';
// console.log(!typeof name === 'object');//False
// console.log(!typeof name === 'string');//false
//In js the operators are performed left to right so first the '!typeof name' will be calculated
//typeof name is string and before this there is negotiation so it will become false and false
//is not equals to Object or string 
//so the Output will be False

// const name = 'jack';
// const age = 23;
// console.log(isNaN(name));//true
// console.log(isNaN(age));//false

// let person = {name:'john'};
// Object.seal(person);
// //how you can modify this Object?
// person.age = 21;//it will not work 
// console.log(person);//{name  :'john'}
// //when we seal an object than we can not add any property to that object we can only modify the 
// //existing property
// person.name = 'peter';
// console.log(person);//{name:"peter"}

// let data = [2,5,9,10,4];
//remove the first element -->
// data.shift();
// console.log(data);//[5,9,10,4]
//remove the last element -->
// data.pop();
// console.log(data);//[5,9,10]