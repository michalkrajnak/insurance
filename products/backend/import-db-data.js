const mongoose = require('mongoose')

const db_uri = `mongodb://${process.env.MONGODB_SERVER}:${process.env.MONGODB_PORT}/insurance`

mongoose.connect(db_uri, {
    auth: {
        authSource: `admin`
    },
    user: process.env.MONGODB_ADMIN_USERNAME,
    pass: process.env.MONGODB_ADMIN_PASSWORD,
    useNewUrlParser: true
})

const db = mongoose.connection
db.on(`error`, console.error.bind(console, `Connection error: `))
db.once(`open`, function () {
    console.log(`Database connected`)
})

const insuranceProducts = [
    {
        "name" : "Damage",
        "description" : "Your device is damaged? We'll immediately repair it or we'll give you new one.",
        "productType" : "SB"
    },
    {
        "name" : "Lost",
        "description" : "You lose your laptop in Hungary? We'll give you new one.",
        "productType" : "SB"
    },
    {
        "name" : "Theft",
        "description" : "Some guy in metro steal your new phone? We'll give you new one.",
        "productType": "SB"
    },
    {
        "name" : "Disaster",
        "description" : "Washing machine broke and flood your neighbors? We'll cover all costs.",
        "productType" : "BB"
    },
    {
        "name" : "Damage",
        "description" : "Your cat jump on your new fancy 4K TV and drop it to the floor? We'll immediately repair it or we'll give you new one.",
        "productType" : "BB"
    },
    {
        "name" : "Theft",
        "description" : "Lawn mower stolen from your shed? We'll give you new one.",
        "productType": "BB"
    },
    {
        "name" : "Disaster",
        "description" : "Dishwasher damage your valuable old dishes your grandmother gave to you? We'll evaluate your broken heart and give you money.",
        "productType" : "SBRE"
    },
    {
        "name" : "Damage",
        "description" : "Jealous neighbour destroy your new satellite TV antenna? We'll give you new one.",
        "productType" : "SBRE"
    },
    {
        "name" : "Theft",
        "description" : "",
        "productType" : "SBRE"
    }
]

const insuranceProductsSchema = new mongoose.Schema({
    name: String,
    description: String,
    productType: String
}, { collection: `insurance_products` })

const Insurance = mongoose.model(`Insurance`, insuranceProductsSchema)

Insurance.collection.insertMany(insuranceProducts, function (err, data) {
    if (err) return console.error(err)
    console.log(`Imported data: `, data)
    db.close()
})
