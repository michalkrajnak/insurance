import { getInsuranceProducts } from './services/api'

const defaultState = {
    isProductTypeSelected: false,
    insuranceProducts: {},
}

const STORE_INSURANCE_PRODUCTS = 'storeInsuranceProducts'
const PRODUCT_TYPE_SELECTED = 'productTypeSelected'

export const submitProductTypes = (productTypes) => (dispatch) => {
    dispatch({
        type: PRODUCT_TYPE_SELECTED,
    })

    Object.keys(productTypes).map((productType) => {
        if (productTypes[productType]) {
            getInsuranceProducts(productType).then((response) => dispatch({
                    type: STORE_INSURANCE_PRODUCTS,
                    payload:
                        {
                            productType,
                            data: response.data,
                        },
                }),
            )
        }
    })
}

export const storeInsuranceProductsIds = (insuranceProductIds) => {
    localStorage.setItem(
        `insuraceProductIds`,
        Object.keys(insuranceProductIds).filter((insuranceProductId) =>
            insuranceProductIds[insuranceProductId]).toString(),
    )
    window.location.href = process.env.FO_QUESTIONS_URL
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case STORE_INSURANCE_PRODUCTS:
            return {
                ...state,
                insuranceProducts: {
                    ...state.insuranceProducts,
                    [action.payload.productType]: action.payload.data,
                },
            }
        case PRODUCT_TYPE_SELECTED:
            return {
                ...state,
                isProductTypeSelected: true,
            }
        default:
            return state
    }

}
