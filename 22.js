//how to get a property from an object without . operator -->
// const data = {name : 'jack',age : 32};
// console.log(name);//error
//console.log(age);//error
// const {name} = data;
// const {age} = data;
// console.log(name);//jack
// console.log(age);//32

//Merge two Objects -->
// const data = {name : 'jack',age : 32};
// const data2 = {city : 'Noida',email : 'admin@123'};
// let merge = {...data,...data2};
// console.log(merge);//{ name: 'jack', age: 32, city: 'Noida', email: 'admin@123' }

// const res = false || {} || null;
// console.log(res);//{} because the OR operator always takes a +ve value and {} is a +ve value 

// console.log(Promise.resolve(5));//Promise Fulfilled

// const res = false || null || '';
// console.log(res);// '' because there is no +ve value so the last value will be 
//assigned to res which is a string

// JSON.parse() what this method will do -->
//Parses JSON to a Js value 

