//Deep and Shallow Copy -->
//In js when we copy a object into another object its reference is copied which causes when 
//we perform some changes in second object the first one will also changed

// let obj = {
//     name:'peter',
// }
// let user = obj;
// user.name = 'john';
// console.log(obj.name);//john

//So to overcome this problem we uses shallow and deep copy -->
//1: Shallow Copy --> In shallow copy we use Object.assign() and destructuring method but 
//it does not works properly with nested object only the first level of object's value is copied
//but the nested level's reference is copied

//using Object.assign()-->
// let obj = {
//     name:'peter',
// }
// let user = Object.assign({},obj);
// user.name = 'john';
// console.log(obj.name);//peter

//using destructuring -->
// let obj = {
//     name:'peter',
// }
// let user = {...obj};
// user.name = 'john';
// console.log(obj.name);//peter

//Limitation -->
// obj = {
//     name:'peter',
//     address : {
//         city:'Noida',
//         state:'Up',
//     }
// }
// let user = {...obj};//or user = Object.assign({},obj);
// user.address.city = 'gurgaon';
// console.log(obj.address.city);//gurgaon

//2. Deep Copy --> Deep copy properly works with nested object in deep copy we use
//JSON.parse() and JSON.stringify() method to copy object but it does not copies functions
//and dates

// let obj = {
//     name:'peter',
//     address : {
//         city:'Noida',
//         state:'Up',
//     },
//     getData:function(){
//         return 'all data is here';
//     }
// }
// let user = JSON.parse(JSON.stringify(obj));
// user.address.city = 'gurgaon';
// console.log(obj.address.city);//Noida
// console.log(user.getData());//ERROR -->user.getData is not a function

//To overcome this problem we use Lodash library of js -->
const _ = require('lodash');
let obj = {
    name:'peter',
    address : {
        city:'Noida',
        state:'Up',
    },
    getData:function(){
        return 'all data is here';
    }
}
let user = _.cloneDeep(obj);
user.address.city = 'gurgaon';
// console.log(obj.address.city);//Noida
// console.log(user.getData());
let num=12;
console.log(num.length);
