const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Check if the request is for the root path ('/')
    if (req.url === '/' || req.url === '/index.html') {
        // Read the 'index.html' file
        const indexPath = path.join(__dirname, 'index.html');

        fs.readFile(indexPath, 'utf8', (err, data) => {
            if (err) {
                // Handle error (e.g., file not found)
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                // Serve the 'index.html' file with a 200 OK status
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
    // Handle other routes or files (if needed)
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});