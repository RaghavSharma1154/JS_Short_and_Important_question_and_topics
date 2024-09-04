//value vs reference -->

//primitives pass value
let x = 2;
let y = x;
y++;
// console.log(x,y)//2,3 x will nto change.

//structural types use reference -->
// let arr1 = [1,2,3];
// let arr2 = arr1;
// arr2.push(4);//after changing arr2 arr1 will also change because both have same reference
// console.log(arr1,arr2);
// console.log(arr1 === arr2); 

//mutable and non-mutable-->

//primitives are immutable or non-mutable -->
// let s = "hello";
// s[0] = 'r';
// console.log(s);//this will not  work
// s ='hii';
// console.log(s);//but reassignment works properly

//structures contains mutable data -->
// let arr = [1,2,3,4];
// arr[0] =32;
// console.log(arr);

//Impure Functions --> Impure functions mutates the data
const add = function(arr,val){
    arr.push(val);
    return arr;
}
// console.log(add([1,2,3],4));

//Shallow copy vs deep copy -->