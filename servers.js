/**
 * Create By admins on 2020/9/27.
 */

const http = require('http');
const hostname = require('localhost');

const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('你好世界！\n');
})

server.listen(port,()=>{
    console.log(`服务器在http://${hostname}:${port}/`)
})