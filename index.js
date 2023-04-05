const express = require("express");
const path = require('path');

const app = express();

const pagesPath = path.join(__dirname,'pages');

// app.use(express.static(pagesPath));

app.get("", (req, res) => {
  res.sendFile(`${pagesPath}/index.html`)
});

app.get("*", (req, res) => {
    res.sendFile(`${pagesPath}/errorPage.html`)
  });

// app.get("/home", (req, res) => {
//   res.send([
//     {name:'mudassar',age: 23},
//     {name:'ali',age: 20}
//   ]);
// });



app.listen(4200);

// Basic Server in Nodejs

// const http = require ('http');

// http.createServer((req,res)=>{
//     res.write('Assalam u Alaikum!');
//     res.end();
// }).listen(4500);

// Basic API in Nodejs and Creating a file and list of files

// const http = require("http");
// const fs = require("fs");
// const user = require("./app");
// const path = require("path");

// const dirPath = path.join(__dirname, "files");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "content-type": "applicationjson" });
//     res.write(JSON.stringify(user));
//     res.end();
//   })
//   .listen(4200);

// Creating a list of files

// for(let i =1; i<=5; i++){
//     fs.writeFileSync(`${dirPath}/file${i}.txt`,'Testing'+ i);
// }

// Read a list file

// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((file)=>{
//         console.log(file);
//     })
// })

// CRUD with File System

// Creating a file

// fs.writeFileSync('file.txt','Text File');

// Reading a file

// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(data);
// });

// Updating a file

// fs.appendFile('file.txt','I am Updated again.',(err)=>{
//     console.log('Updated File');
// });

// Renaming a file

// fs.rename('file.txt','updated.txt',(err)=>{
//     if (err) throw err;
//     console.log('Name Updated')
// });

// Deleting a file

// fs.unlinkSync('updated.txt');

// Handling Asynchronus Data

// let a = 10;
// let b = 15;

// let prom = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(30);
//   }, 2000);
// });

// prom.then((data)=>{
//     console.log(a+data);
// })
