const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('./controllers/handlers.js')
app.use(bodyParser.json());

app.get('/stars', path.getItem);
app.post('/star', path.createNewItem);
app.put('/star/:id', path.updateItem);
app.get('/star/:id', path.getItemById);
app.delete('/star/:id', path.removeItemById);


process.stdout.write('What are you waiting for? \n');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening from port ${port}...`))



