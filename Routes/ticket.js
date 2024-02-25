const express = require('express');
const router = express.Router();
const ticketController = require('../Controllers/ticket');


router.get('/:id', (req, res, next) => {
    return ticketController.getTicket(req, res, next)
})

router.get('/', (req, res, next) => {
    return ticketController.getTickets(req, res, next)
})

router.post('/', (req, res, next) => {
    return ticketController.addTicket(req, res, next)
})

router.put('/:id', (req, res) => {

})

router.post('/reset', (req, res) => {

})


module.exports = router