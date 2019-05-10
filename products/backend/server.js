const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./api/swagger/swagger.json')
const productRouter = require('./api/routes/product')

const HOST = process.env.HOST || 'localhost'
const LISTEN_PORT = process.env.LISTEN_PORT || 3000

const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/api/', productRouter)

app.listen(LISTEN_PORT, function () {
    console.log(`Server running at http://${HOST}:${LISTEN_PORT}`)
})
