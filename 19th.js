// console.log(typeof typeof 1); //String because typeof 1 is number and typeof number is String

// const numbers = [1,2,3];
// numbers[6] = 34;
// console.log(numbers);//[1,2,3,<3 empty items>,34]
//because if length of an array is n and we set the array[n+3] = val then the remaining 
//elements from n to  n+3-1 will be empty

// const numbers = [1,2,3];
// numbers[3] = numbers;
// console.log(numbers);//it will give a infinite array 

//Everything in js is either a primitive or Object

// console.log(!!null);//!null is true and !true is false.
// console.log(!!"");//a string is type of -ve value and !-ve is true and !true is false
// console.log(!!1);//!1 is false and !false is true

// console.log(setInterval(()=>console.log("hii"),1000));
// console.log(setInterval(()=>console.log("hii"),1000));
// console.log(setInterval(()=>console.log("hii"),1000));
//It will first log the Id's of all 3 setIntervals then the output will logged after every ms of delay 

// console.log([..."anil"]);//['a','n','i','l']
//Destructuring breaks a String/array/Object in minimal part

console.log(typeof 3 + 4 + "5");//number45