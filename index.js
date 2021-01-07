const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;


fs.readFile('index.html', (err, html) =>{
    if (err){
        throw err;
    }
    const server = http.createServer((req,res) => {


        res.statusCode = 200;
        if(req.url == '/'){
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
        res.statusCode = 200;
        } 

        else if(req.url == '/css/bootstrap.min.css'){
            res.setHeader('Content-type', 'text/css');
            res.write(fs.readFileSync('css/bootstrap.min.css'));
            res.end();
        }else if(req.url == '/js/bootstrap.min.js'){
            res.setHeader('Content-type', 'text/js');
            res.write(fs.readFileSync('js/bootstrap.min.js'));
            res.end();
        } else {
            res.write("invalid request")
            res.end();
        }

    });

        server.listen(port, hostname, () => {
        console.log('Server started on port ' + port);
    });
});