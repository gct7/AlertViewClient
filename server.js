import http from 'http';
import fs from 'fs/promises';
// import { url } from 'inspector' ;
import url from 'url';
import path from 'path';
import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// __filename = path.basename(fileURLToPath(import.meta.url));
// __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT=process.env.PORT || 3000;
//const __filename = new URL(import.meta.url).pathname;
const __filename = url.fileURLToPath(import.meta.url);
//Get current path
const __dirname = path.dirname(__filename);

console.log(__dirname);

console.log(__filename);

const server = http.createServer(async (req, res) => {

    // console.log(req);
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    try {
if (req.method === 'POST') {   
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        console.log(body);
        res.end('ok');
    }); 
} else if (req.method === 'GET') {

    let filePath;

    if (req.url === '/') {
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.end('<h1>Home Page</h1> <a href="/about">About</a>');
    filePath = path.join(__dirname, 'public', 'index.html');

    }
    else if (req.url === '/about') {
        // res.write('About Page');
        // res.end();
        filePath = path.join(__dirname, 'public', 'about.html');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page Not Found</h1> <a href="/">Home</a>');
    } 
    
    const data = await fs.readFile(filePath);
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end();

} else if (req.method === 'PUT') {
    res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page Not Found</h1> <a href="/">Home</a>');
}



        
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error');
    }

    
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
});

server.listen(PORT, () => {
    console.log('Server running at http://localhost:3000/');
    });