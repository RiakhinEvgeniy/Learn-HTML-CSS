const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('New client connection');

    ws.on('message', (message) => {
        console.log(`Recieved message: ${message}`);
        ws.send(`Sending message: ${message}`);
    })

    wss.on('close', () => {
        console.log('Close connection from server');
        wss.close();
    })

    ws.send('Hi! This is server');
})