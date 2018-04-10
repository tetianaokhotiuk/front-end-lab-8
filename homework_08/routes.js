const express = require('express');
const router = express.Router();
const path = require('./controllers/handlers.js');
router.get('/stars', path.getItem);
router.post('/star', path.createNewItem);
router.put('/star/:id', path.updateItem);
router.get('/star/:id', path.getItemById);
router.delete('/star/:id', path.removeItemById);
module.exports = router;