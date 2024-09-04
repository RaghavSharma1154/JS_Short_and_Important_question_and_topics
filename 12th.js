// const obj = {
//     a:'one',
//     b:'two',
//     a:'three'
// }
// console.log(obj);
//the answer will be {a:'three',b:'two'} because a:three will overwrite a:one but position of 
//a will not change.

let obj = {name:'raghav'};
// obj = null;//in this case o/p will --> [null]
const arr = [obj];
obj = null;
console.log(arr);//o/p --> [{name:'raghav'}]
console.log(obj);//o/p --> null