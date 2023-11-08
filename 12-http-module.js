const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('This is our brief history')
    }
    res.end(`<h1>Oops!</h1>
    <p>We cant see to find the page you are looking for</p>
    <a href='/'>back to home </a>`);//there is no break or return to end excution
});

server.listen(5000);