//call() bind() and apply method -->

//1: .call() method --> we can pass multiple arguements in .call method
// let obj1 = {
//     name:'raghav',
//     age:19
// }
// let obj2={
//     name:'john',
//     age:33
// }

// function show(state,country){
    // console.log(this.name + " " + state + " " + country);
    // console.log(this.name + " " + state);
// }
// show.call(obj1 ,'srinagar','India');
// show.call(obj2,'delhi','India');

//2: .apply() method --> In .apply method we pass arguements in form of array
// show.apply(obj1,['delhi','India']);

//3: .bind() method --> In .bind() method we don't directly call the function we create
//a copy of that function and store it in a variable then we call that variable later

// let func = show.bind(obj1,'srinagar','India');
// func();

//Call() bind() and apply() Method --> call bind and apply() are the methods to attach function 
//with object to get its functionalities

let student = {
    name : 'anil',
    age : 19,
}
let teacher = {
    name : 'peter',
    age:39,
}

function getFullName(LastName){
    return `${this.name} ${LastName}`;
}
function getEmail(){
    return `${this.name}12@gmail.com`;
}

function chooseSubjects(sub1,sub2,sub3){
    return `${sub1} ${sub2} ${sub3}`;
}

//call() --> In call() method we can pass any type of parameters 
// console.log(getEmail.call(student));//anil12@gmail.com
// console.log(getEmail.call(teacher));//peter12@gmail.com
// console.log(chooseSubjects.call(teacher,'Maths','Physics','Chemistry'));//Maths Physics Chemistry
//In .call() method we can pass any type of arguments

//.apply() --> In apply() method to pass parameters the params are enclosed in an array.
// console.log(getEmail.apply(student));//anil12@gmail.com
// console.log(getFullName.apply(teacher,['parker']));//peter parker
// console.log(chooseSubjects.apply(teacher,['Maths','physics','Bio']))//Maths physics Bio
//In .apply() method we can only pass the parameters in array form

//.Bind() --> In bond() method the function is not invoked directly , it only binds the function 
//with object and stores that function. we can store that function and call it whenever
//needed

// let callItLater = chooseSubjects.bind(teacher,'Maths' ,'physics' ,'Hindi');
// console.log(callItLater);//[Function: bound chooseSubjects]
// console.log(callItLater());//Maths physics Hindi