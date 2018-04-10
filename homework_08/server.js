const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('./controllers/handlers.js')
app.use(bodyParser.json());

app.get('/rockstars', path.getItem);
app.post('/rockstar', path.createNewItem);
app.put('/rockstar/:id', path.updateItem);
app.get('/rockstar/:id', path.getItemById);
app.delete('/rockstar/:id', path.removeItemById);


process.stdout.write('What are you waiting for? \n');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening from port ${port}...`))



