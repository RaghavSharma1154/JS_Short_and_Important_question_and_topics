//how to check for empty array -->
let myArray = [];
// console.log(myArray.length ? true : false);//false

// myArray = undefined;
// console.log(myArray.length ? true : false);//Error
//instead of this we can use -->
// console.log(myArray && myArray.length ? true : false);//false
//or instead of this we can use --> Optional Chaining 
// console.log(myArray?.length ? true : false);//false

myArray = [{"id":1}];
// console.log(myArray?.[0]?.id ? true : false);//true
// console.log(myArray?.[0]?.name ? true : false);//false

//By null coalescing Operator -->
// console.log(myArray?.[0]?.id ?? "No id Property");//value of id -->1
// console.log(myArray?.[0]?.name ?? "NO name Property");//No name Property

//To Find if it is an array or not -->
console.log(Array.isArray(myArray));//true

