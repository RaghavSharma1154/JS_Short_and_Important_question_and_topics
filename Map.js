// const obj ={
//     name : 'peter',
//     10 : "this is a numeric value"
// }

// const map = new Map([
//     ['name' , 'john'],
//     [10 ,'this is a numeric value']
// ])

// console.log(obj);//{ '10': 'this is a numeric value', name: 'peter' }
// console.log(map);//Map(2) { 'name' => 'john', 10 => 'this is a numeric value' }
//In map a key can be any value like string number boolean etc but in object a key can be only string

// console.log(obj.10);//error
// console.log(map.get(10));//this is a numeric value

//How to get keys from a map -->
// console.log(map.keys());//{'name',10}

//updation in map -->
// map.set(10,'numeric value');
// console.log(map.get(10));//numeric value

//how to get values from Map -->
// console.log(map.values());//{'john','numeric value'}

//To get size of Map -->
// console.log(map.size);//2

//To set a property -->
// map.set('age',21);

//check existance of a property in Map -->
// console.log(map.has(10));//true
// console.log(map.has('city'));//false

//Iterate a Map -->

//using forEach loop -->
// map.forEach((val,key)=>{
    // console.log(key,val);
    //name john
    //10 numeric value
    //age 21
// })

//using for of loop -->
// for(x of map){
    // console.log(x);
    //[ 'name', 'john' ]
    // [ 10, 'numeric value' ]
    // [ 'age', 21 ]
// }

// for(x of map){
//     console.log(x[0],x[1]);
// }
// name john
// 10 numeric value
// age 21

// for([x,y] of map){
    // console.log(x);//name 10 age
    // console.log(y);//john numeric value  21
// }

//Map is an advanced object with some new features.It also allows to create a numeric key meanwhile
// object only takes keys as String
//In Map a key can be of object , string ,integer ,function ,boolean type.

// let obj = {
//     name : 'peter',
//     10 : 'this is a number key'
// }
let data = new Map([
    ['name' , 'anil'],
    [10,'this is a number key in Map'],
    [true , 'this is a boolean value']
])
// console.log(obj.10);//Error
// console.log(data.get(10));//this is a number key in Map
// console.log(obj);

//checking the size of Map -->
// console.log(data.size);

//setting a key value pair in Map -->
// data.set('city','Srinagar');

//getting value of a key in Map -->
// console.log(data.get('name'));//anil

//getting all keys of Map -->
// console.log(data.keys());// { 'name', 10, true }

//getting all values from Map-->
// console.log(data.values());

//checking existance of any key in Map -->
// console.log(data.has(10));//true

//deleting any value from Map -->
// data.delete(true);

//Iterating Map -->

//forEach loop -->
// data.forEach((val,key)=>{
//     console.log(key,val);
// })

//for of loop -->
// for([k,v] of data){
//     console.log(k,v);
// }
// console.log(data);