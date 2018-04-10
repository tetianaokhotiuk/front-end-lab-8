const express = require('express');
const router = express.Router();
const path = require('./controllers/handlers.js');
router.get('/rockstars', path.getItem);
router.post('/rockstar', path.createNewItem);
router.put('/rockstar/:id', path.updateItem);
router.get('/rockstar/:id', path.getItemById);
router.delete('/rockstar/:id', path.removeItemById);
module.exports = router;