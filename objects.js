//Objects are the collection of related data and related functionalities
//Or Objects are the collection of key value pair

// const obj = {
//     name:'peter',
//     age:34,
//     isDev:true,
//     getData:function(){
//         return this.city;
//     },
//     inner : {
//         name:'john',
//         age:29
//     }
// }
// console.log(obj);
//Deleting keys of object -->
// delete obj.inner;//it will delete the inner object
// delete obj.age;//It will delete age from the objects first level not the nested object's
// console.log(obj);

//hoisting -->
// obj.city = 'New york';//i define this  city property later outside the function but we can use this property inside the objects 
// console.log(obj.getData());

//how to insert a key with white spaces -->
// obj['pin code'] = 1234;
// console.log(obj['pin code']);

//how to pass variables as keys in objects -->
// let key = "address";
// let phone = 6397893338;
// let email = "sharmaraghav1154@gmail.com";
// let obj1 = {
//     [key] : "Noida UP India",//method1
//     phone:phone,//method2
//     email,//method3
// }
// console.log(obj1);
// console.log(obj1.address);
// console.log(obj1.phone);
// console.log(obj1.email);
// console.log(obj1);

//how to check that the key present in object or not -->
// console.log("phone" in obj1);//true
// console.log("gender" in obj1);//false

//sum of the values in an object -->
// let emp ={
//     rohit : 1000,
//     mohit : 3000,
//     suman : 200,
//     rajat : 400
// }
// let sum = 0;
// for(let key in emp){
//     sum += emp[key];
// }
// console.log(sum);

//Objects in js --> Objects are the collection of the related data.In an object data is stored in key value pair.

//defining an object -->
// let obj = {};
// let user = new Object();

//How to use a variable as key-->
let key = "address";

//we can also use-->
let phone = 6397893338;
let email = "sharmaraghav1154@gmail.com";
let user = {
    name:'peter',
    age:29,
    getData : function(){
        return this.city;
    },
    inner:{
        name:'inner',
    },
    [key] : 'lamgoundi rudraprayag India',//address : lamgoundi rudraprayag
    phone:phone,
    email,
}
//delete any property of an object-->
delete user.inner;

//assigning a key which has white spaces in it--->
user['Pin Code'] = 246439;

//Hoisting-->
user.city = 'Lamgoundi';//it is assigned later but we can use it early inside the object
// console.log(user.city);

//checking existance of a key in object-->
// console.log('phone' in user);//true
// console.log(user);

let emp = {
    anil:1200,
    rajat:2300,
    amit:1200,
    jeet:21000,
}
let salary = 0;
for(item in emp){
    salary += emp[item];
}
console.log(salary);
