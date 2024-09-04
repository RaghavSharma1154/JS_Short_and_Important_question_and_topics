//Set() --> A set is a collection of unique values . It stores values same as array but it 
//removes duplicate values

let data = new Set([12,23,34,'hello',34]);//we assign 34 twice but the set will remove the last 34 
// console.log(data);//Set(4) { 12, 23, 34, 'hello' }

//adding value in set -->
data.add(6);
data.add({name:'anil'});
// console.log(data);//{ 12, 23, 34, 'hello', 6, { name: 'anil' } }

//deleting value in set -->
data.delete('hello');
// console.log(data);//{ 12, 23, 34, 6, { name: 'anil' } }

// data.clear();//It will clear the set

//Convert array into set -->
let arr = [12,2,4,12,4,9,'hii'];
arr = new Set(arr);
// console.log(arr);//Set(5) { 12, 2, 4, 9, 'hii' } it will also removes duplicate values

// converting set into array -->
let set = new Set([12,2,4,23,{}]);
set = [...set];
// console.log(set);

//Iterating a set -->

// data.forEach(item => {
//     console.log(item);
// })

// for(x of data){
//     console.log(x);
// }
