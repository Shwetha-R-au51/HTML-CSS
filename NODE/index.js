//require("./add.js") ===> complete add.js file
//const add = require('./add') // add module from add.js file
//console.log("hello");
//const sum = add(7, 6);
//console.log(sum);

//require("./module2.js");
//require("./module3.js");

////const superman = require("./super-man");
//console.log(superman.getName());
//superman.setName("superman");
//console.log(superman.getName());

//create a http server

// const http = require("node:http");
// const fs =require("node:fs");
// const server = http.createServer((req, res) =>{
   
//     // const SuprHero = {
//     //     firstName: "Bruce",
//     //     lastName: "R",

//     // };
//     // res.writeHead(200, {"Content-Type": "application/json"});
//     // res.end(JSON.stringify(SuprHero));
//     //res.writeHead(200, {"content-type": "text/html"});
//     //fs.createReadStream(__dirname + "/module2.js").pipe(res);
//     // const name = "vishwas";
//     // res.writeHead(200, {"Content-Type": "text/html"});
//     // let html = fs.readFileSync("./module2.html", "utf-8");
//     // html= html.replace("{{name}}",name);
//     // res.end(html);

//     if(req.url === "/"){
//         res.writeHead(200, {"Content_Type": "text/plain"});
//         res.end("Home Page");
//     }
//     else if(req.url === "/about")
//     {
//         res.writeHead(200, {"Content_Type": "text/plain"});
//         res.end("About Page");

//     }
//     else if(req.url === "/api"){
//         res.writeHead(200, {"Content_Type": "application/json"});
//         res.end(
//             JSON.stringify({
//                 fname: "shwetha",
//                 lname: "R",
//         })
//         );
//     }else{
//         res.writeHead(404);
//             res.end("page not found");
      
//     }
   

// });                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

const crypto = require("node:crypto");
const start=Date.now();
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
console.log("hash:",Date.now() -start);

// server.listen(3000, () => {
//     console.log("server running on port 3000");
// });