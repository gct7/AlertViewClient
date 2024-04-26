import {createServer} from 'http';

const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'},
];


const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        const user = users.find(user => user.id === parseInt(id));
        if (user) {
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(user));
            res.end();
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.statusCode = 404;
            res.write(JSON.stringify({message: 'User Not Found'}));
            res.end();
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'Route Not Found'}));
        res.end();
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));