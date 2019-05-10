const express = require('express')
const productController = require('../controllers/product')

const router = express.Router()

router.get('/product', productController.find)

router.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send({message: 'Error happened. - TODO: to implement handler of what is wrong'})
})

module.exports = router
