import React, { Component } from 'react'
import BasketConfigurationForm from './BasketConfigurationForm.jsx'
import InsuranceSelectionForm from './InsuranceSelectionForm.jsx'
import { EnvironmentThemeProvider } from "@codex/themes"
import axios from "axios"

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }

        this.onProductTypeSelect = this.onProductTypeSelect.bind(this)
    }

    onProductTypeSelect(productTypesList) {

        let params = ''

            Object.keys(productTypesList).map((productType) => {
                if (productTypesList[productType]) {
                    params = params + productType + ','
                }
            })
            params = params.replace(/,\s*$/, "");

            console.log(params)

            axios.get(`${process.env.BACKEDND_URL}/api/product`, {
                params: {
                    productTypes: params
                }
            }).then((response) => {
                    this.setState({insuranceProducts: response.data})
                }
            )
    }

    render() {
        return (
            <EnvironmentThemeProvider>
                <div>
                    {this.state.insuranceProducts ? (
                        <InsuranceSelectionForm productTypes={this.state.insuranceProducts}/>
                    ) : (
                        <BasketConfigurationForm onSelect={this.onProductTypeSelect}/>
                    )}
                </div>
            </EnvironmentThemeProvider>
        )
    }
}

export default App
