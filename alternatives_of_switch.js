//alternatives of switch statement --> The alternatives of switch statement can be Object and Map-->

//Switch Statement -->
// const extension = '.json';
// let contentType;
// switch(extension){
//     case ".css":
//         contentType = "text/css";
//         break;
//     case ".js":
//         contentType = "text/js";
//         break;
//     case ".json":
//         contentType = "application/json";
//         break;
//     case ".png":
//         contentType = "image/png";
//         break;
//     default:
//         contentType = "text/html";
// }
// console.log(contentType);
//The switch statement is too lengthy

//using Object -->
// const extension = ".png";
// const obj ={
//     ".css" : "text/css",
//     ".js" : "text/js",
//     ".png" : "image/png",
//     ".jpg" : "image/jpeg",
//     ".json" : "application/json",
// }
// console.log(obj[extension] || "text/html");//image/png

//using Map -->

const extension = ".js";
const m = new Map();
m.set(".css","text/css");
m.set(".js","text/js");
m.set(".json","application/json");
m.set(".jpg","image/jpeg");
m.set(".png","image/png");

console.log(m.get(extension) || "text/html");