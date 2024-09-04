//JavaScript Object Notation is a lightweight format for storing and transporting data.
//JSON is often used when data is sent from server to a web page

//convert an object to JSON and store it in a JSOn file and read that file and then again 
//convert that JSON into JS Object
const data = {
    name : 'jack',
    age : 32,
    email : 'admin@123'
}
//convert data into JSON -->
const jsonData = JSON.stringify(data);
console.log(jsonData);//{"name":"jack","age":32,"email":"admin@123"}
// console.log(data);//{ name: 'jack', age: 32, email: 'admin@123' }

//create a JSOn file and store jsonData in it -->
const fs = require('fs');
fs.writeFile('rs.json',jsonData,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("done");
    }
})
//convert back it to js Object -->
// const orgData = JSON.parse(jsonData);
// console.log(orgData);//{ name: 'jack', age: 32, email: 'admin@123' }
