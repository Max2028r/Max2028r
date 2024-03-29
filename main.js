const http = require('http');

const hostname = 'localhost';
const port = 3000;

const fs = require('fs');

fs.readFile('index.html',(err,html)=>{
  if(err){throw(err)}

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end(); 
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
})
