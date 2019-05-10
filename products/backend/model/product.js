const mongoose = require('../services/db')

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    productType: String
})

module.exports = mongoose.model('Insurance_products', productSchema)
