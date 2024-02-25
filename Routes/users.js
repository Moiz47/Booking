const express = require('express');
const router = express.Router();
const ticketController = require('../Controllers/ticket');

router.get('/:id', (req, res) => {
    // get a user
})

router.post('/', (req, res) => {
    // add a user
})

router.put('/:id', (req, res) => {
    // update user
})

router.delete('/:id', (req, res) => {
    // delete user
})


module.exports = router