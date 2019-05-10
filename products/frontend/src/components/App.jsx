import React, { Component } from 'react'
import BasketConfigurationForm from './BasketConfigurationForm.jsx'
import InsuranceSelectionForm from './InsuranceSelectionForm.jsx'
import { EnvironmentThemeProvider } from "@codex/themes"

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isProductTypeSelect: false
        }

        this.onProductTypeSelect = this.onProductTypeSelect.bind(this)
    }

    onProductTypeSelect(productTypes) {
        this.setState({isProductTypeSelect: true})
    }

    render() {
        return (
            <EnvironmentThemeProvider>
                <div>
                    {this.state.isProductTypeSelect ? (
                        <InsuranceSelectionForm/>
                    ) : (
                        <BasketConfigurationForm onSelect={this.onProductTypeSelect}/>
                    )}
                </div>
            </EnvironmentThemeProvider>
        )
    }
}

export default App
