const http = require('http');

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/":
            res.end(JSON.stringify([
                {
                    title: "meeting with john doe",
                    completed: false
                },
                {
                    title: "buy a keyboard",
                    completed: false
                }
            ]));
            break;

        default:
            res.end("no data")
            break;
    }
}

const server = http.createServer(requestListener);
server.listen(8080, undefined, () => {
    console.log(`Server running on http://localhost:8080`)
});