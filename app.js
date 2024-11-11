import WebSocket, {WebSocketServer} from "ws";

const wss = new WebSocketServer({ port: 8000 });

wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.send("Welcome to Whatsapp 2");

    ws.on("message", (message) => {
        console.log(`Received message: ${message}`);

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });
});

console.log("Server started on port 8000");