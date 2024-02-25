const express = require('express');
const router = express.Router()

router.get('/:id', (req, res) => {

})

router.get('/', (req, res) => {

})

router.post('/', (req, res) => {
    console.log("request body", req.body)
    return res.status(200).json({
        data: "success"
    })

})


module.exports = router