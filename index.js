const express = require ('express');
const app = express();

app.get('',(req,res)=>{
res.send('This is an Express');
});

app.get('/home',(req,res)=>{
    res.send('This is an Express Home Page');
    });

    app.get('/about',(req,res)=>{
        res.send('This is an Express About Page');
        });
app.listen(4200);





// Server in Nodejs

// const http = require ('http');


// http.createServer((req,res)=>{
//     res.write('Assalam u Alaikum!');
//     res.end();
// }).listen(4500);
