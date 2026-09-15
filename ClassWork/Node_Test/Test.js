import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>Welcome to My College</h1>
            <p>Welcome to My College Website.</p>
        `);
    }

    else if (req.url === "/home") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>Home Page</h1>
            <p>Welcome to the College Home Page.</p>
        `);
    }

    else if (req.url === "/about") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>About Computer Science Department</h1>
            <p>This is the Computer Science Department of our college.</p>
        `);
    }

    else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        `);
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
