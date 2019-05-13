import React, {Component, Fragment} from 'react'
import {Button, Checkbox} from '@codex/basics'

class InsuranceSelectionForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedInsuranceProducts: {}
        }

        this.handleCheck = this.handleCheck.bind(this)
    }

    handleCheck(insuranceProductId) {
        const newState = {};
        const { selectedInsuranceProducts } = this.state

        newState[insuranceProductId] = selectedInsuranceProducts[insuranceProductId] ? !selectedInsuranceProducts[insuranceProductId] : true
        this.setState({
            selectedInsuranceProducts: {
                ...selectedInsuranceProducts,
                ...newState
            }
        })
    }

    render() {
        const { selectedInsuranceProducts } = this.state

        return (
            <Fragment>
                {this.props.productTypes.map((insuranceProduct, index) => (
                    <Checkbox
                        key={index}
                        checked={selectedInsuranceProducts[insuranceProduct._id]}
                        onCheck={() => this.handleCheck(insuranceProduct._id)}
                    >
                        {insuranceProduct.name}
                    </Checkbox>
                ))}
                <Button full style={{width: 150}}>
                    Submit
                </Button>
            </Fragment>
        )
    }
}

export default InsuranceSelectionForm
