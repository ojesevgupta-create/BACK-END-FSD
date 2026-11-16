import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {
        res.statusCode = 200;
        res.end(`
            <h1>Welcome to My College</h1>
            <p>Welcome to My College Website.</p>
            <a href="/home">Home</a> |
            <a href="/about">About</a>
        `);
    }

    else if (req.url === "/home") {
        res.statusCode = 200;
        res.end(`
            <h1>Home Page</h1>
            <p>Welcome to the College Home Page.</p>
            <a href="/">Home</a> |
            <a href="/about">About</a>
        `);
    }

    else if (req.url === "/about") {
        res.statusCode = 200;
        res.end(`
            <h1>About Computer Science Department</h1>
            <p>This is the Computer Science Department of our college.</p>
            <a href="/">Home</a> |
            <a href="/home">Home Page</a>
        `);
    }

    else {
        res.statusCode = 404;
        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <a href="/">Go to Home</a>
        `);
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});