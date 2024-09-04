//To get current Date -->
let date = new Date();
// console.log(date);//2024-03-10T07:47:16.555Z
// console.log(date.getFullYear());//2024
// console.log(date.getMonth());//2 march is the 3rd month but in js months and weeks starts from 0
//  console.log(date.getDay());//0
// console.log(date.getDate());//10
// console.log(date.getHours());//13
// console.log(date.getMinutes());//20
// console.log(date.getSeconds());//25
// console.log(date.getMilliseconds());

//If we want to get the month and day as full name like january monday then we can do -->
let days = ['sunday','monday','tuesday' ,'wednesday','thursday','friday','saturday'];
let month = ['january','february','march','april','may','june','july','august','september','october','november','december'];
// console.log(month[date.getMonth()]) //march
// console.log(days[date.getDay()]);//sunday

//creating a custom date -->
// let custom = new Date('3/10/2021');
// console.log(custom.getFullYear());//2021
// console.log(days[custom.getDay()]);//wednesday
// console.log(month[custom.getMonth()]);//march
//we can also pass the time -->
let custom = new Date('3/10/2021 3:23:12');
// console.log(custom.getHours());//3
