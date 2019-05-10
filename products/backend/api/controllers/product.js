const Product = require('../../model/product')

module.exports = {
    find: function(req, res) {
        let criteria = {}

        if (req.query.productTypes) {
            criteria = {
                'productType': {$in: req.query.productTypes.split(',')}
            }
        }

        Product.find(criteria, function (err, products) {
            res.send(products)
        })
    }
}
