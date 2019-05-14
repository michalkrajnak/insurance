import axios from 'axios'

export const getInsuranceProducts = (productType) =>
    axios.get(`${process.env.BO_URL}/api/product`, {
        params: {
            productTypes: productType,
        },
    }).catch((err) => {
        console.error(err)
    })
