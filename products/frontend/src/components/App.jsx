import React from 'react'
import BasketConfigurationForm from './BasketConfigurationForm.jsx'
import InsuranceSelectionForm from './InsuranceSelectionForm.jsx'
import { connect } from 'react-redux'

const App = ({isProductTypeSelected}) => (
    <div>
        {isProductTypeSelected ? (
            <InsuranceSelectionForm/>
        ) : (
            <BasketConfigurationForm/>
        )}
    </div>
)

const mapStateToProps = (state) => ({
    isProductTypeSelected: state.isProductTypeSelected,
})

export default connect(mapStateToProps)(App)