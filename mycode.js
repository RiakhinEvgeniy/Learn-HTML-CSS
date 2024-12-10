const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 8080});

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


const ws = new WebSocket('ws://localhost:8080');

ws.onopen = function () {
    console.log('WebSocket open now.');
    let message = 'Hello WebSocket!'
    console.log('Message sending to server' + message);
    ws.send(message);
}

ws.onmessage = function (event) {
    console.log(event.data);
}

ws.onerror = function () {
    console.log('An error occurred');
}

ws.onclose = function () {
    console.log('WebSocket closed!');

}