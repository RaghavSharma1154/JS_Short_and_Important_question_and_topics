//regular expression --> A regular expression is a sequence of characters that forms a search 
//pattern that can be used for text search and text replace operations

let reg = /this/;//this is a regular expression literal in js
reg = /this/g;//this is a global flag if the string contains multiple substring it will print all th index where the substring will be present
// reg = /this/gi;//this is a case insensitive flag
let str = 'It is a tutorial this contains this regular expression this'
// str = "It is a tutorial thIs contains regular expression tHis"


// functions --> 

//1. exec() => this function will return an array for match or null for no match
// let res = reg.exec(str);
// console.log(res.index);
// // if i want to check for all reg that are present in string-->
// res = reg.exec(str);
// // console.log(res);//OR we can only log the index-->
// console.log(res.index);
// res = reg.exec(str);
// console.log(res);

//for case insensitive we can use i flag --> 
// let res = reg.exec(str);
// console.log(res);
// res = reg.exec(str);
// console.log(res);

//2.test() => Returns true or false
// let res = reg.test(str);
// console.log(res);//true

//3.match() => It will return an array of results or null
//wrong --> reg.match(str);
// let res = str.match(reg);
// console.log(res);

//4.search() => returns index of first match else -1;
// let res = str.search(reg);
// console.log(res);//17

//5.replace() => returns new replaced string with all replacements.
let res = str.replace(reg,"This");
console.log(res);