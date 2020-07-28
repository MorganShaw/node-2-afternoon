const express = require('express');
const app = express();
const ctrl = require('./controllers/messages_controller')

const port = 3001;

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

//Solution code:
// const messagesBaseUrl = "/api/messages";
// app.post(messagesBaseUrl, ctrl.createM);
// app.get(messagesBaseUrl, ctrl.readM);
// app.put(`${messagesBaseUrl}/:id`, ctrl.updateM);
// app.delete(`${messagesBaseUrl}/:id`, ctrl.deleteM)

app.post('/api/messages', ctrl.createM);
app.get('/api/messages', ctrl.readM);
app.put('/api/messages/:id', ctrl.updateM);
app.delete('/api/messages/:id', ctrl.deleteM)

app.listen(port, () => {
    console.log(`I'm with you every step of the way on port ${port}`)
})