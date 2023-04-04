const http = require ('http');
const colors = require ('colors');

console.log('Colors'.green);

http.createServer((req,res)=>{
    res.write('Assalam u Alaikum!');
    res.end();
}).listen(4500);
