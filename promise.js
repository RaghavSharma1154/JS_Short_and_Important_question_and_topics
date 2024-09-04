//API call -->fetch api is already a promise and it requires to .then block to print desired result.
// let api = fetch("https://jsonplaceholder.typicode.com/posts/1");
// api.then((item)=>{
//     return item.json();
// }).then((val)=>{
//     console.log(val);
// })

let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("2 secs");
    },2000);
})
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("6 secs");
    },6000);
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("4 secs");
    },4000);
})
//Promise.all([]) method -->
// Promise.all([p,p1,p2]).then((values)=>{
//     console.log(values);
// }).catch((err)=>{
//     console.log(".all method does not show other resolved results if any promise is rejected");
// })
//Promise.allSettled([]) method -->
// Promise.allSettled([p,p1,p2]).then((values)=>{
//     console.log(values);
// })
//Promise.race([]) method -->
Promise.race([p,p1,p2]).then((res)=>{
    console.log(res);
})