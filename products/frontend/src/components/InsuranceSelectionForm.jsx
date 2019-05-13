import React, { Component, Fragment } from 'react'
import { Button, Checkbox, H1, H3 } from '@codex/basics'
import { connect } from 'react-redux'
import { storeInsuranceProductsIds } from '../reducer'

class InsuranceSelectionForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedInsuranceProducts: {}
        }

        this.handleCheck = this.handleCheck.bind(this)
    }

    handleCheck(insuranceProductId) {
        const {selectedInsuranceProducts} = this.state
        const newState = {
            [insuranceProductId]: selectedInsuranceProducts[insuranceProductId] ? !selectedInsuranceProducts[insuranceProductId] : true,
        }

        this.setState({
            selectedInsuranceProducts: {
                ...selectedInsuranceProducts,
                ...newState,
            },
        })
    }

    render() {
        const {selectedInsuranceProducts} = this.state

        return (
            <Fragment>
                <H1>Insurance selection</H1>
                {Object.keys(this.props.insuranceProducts).map((groupId, index) => {
                    const groupedInsuranceProducts = this.props.insuranceProducts[groupId]
                    return (
                        <Fragment key={index}>
                            <H3>{groupId}</H3>
                            {groupedInsuranceProducts.map((insuranceProduct, index) => (
                                <Checkbox
                                    key={index}
                                    checked={selectedInsuranceProducts[insuranceProduct._id]}
                                    onCheck={() => this.handleCheck(insuranceProduct._id)}
                                >
                                    {insuranceProduct.name}
                                </Checkbox>
                            ))}
                        </Fragment>
                    )
                })}
                <Button full onClick={() => this.props.storeInsuranceProductsIds(this.state.selectedInsuranceProducts)}
                        style={{width: 150}}>
                    Submit
                </Button>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    insuranceProducts: state.insuranceProducts,
})

export default connect(mapStateToProps, {storeInsuranceProductsIds})(InsuranceSelectionForm)
