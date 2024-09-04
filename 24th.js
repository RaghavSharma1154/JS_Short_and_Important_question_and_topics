// let data={
//     name:'anil'
// }
// delete data.name;
// console.log(data);//{} delete can only delete the properties of an object not whole object;

// let data = "true";
// console.log(typeof data);//string
// //convert data to boolean false value
// console.log(typeof !data);//data will be false because of negotiation symbol before data
// //and typeof false will e boolean

// let data = "true";
// //convert data to boolean true value -->
// console.log(!!data);//!data will be false and !false will be true in boolean

// let data = ['john','doe','peter'];
// delete data[1];
// console.log(data);//['john',empty,'peter'];
// when we delete an element from an array then inplace of that element there will be an empty item 
//which have no space but the length will not change

// let a =2;
// setTimeout(() => {
//     console.log(a);
// }, 0);
// a=100;
//output will be 100 because the setTimeout will be executed in last and the line a=100
//will be executed before logging a;

// let a = 1;
// let b=2;
// console.log(--b === a);//true