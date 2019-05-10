import React, { Component, Fragment } from 'react'
import { Checkbox } from '@codex/basics'
import { Button } from '@codex/basics'

class BasketConfigurationForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstChecked: false,
            secondChecked: false,
            thirdChecked: false
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit() {
        this.props.onSelect(this.state)
    }

    render() {
        return (
            <Fragment>
                <Checkbox
                    checked={this.state.firstChecked}
                    onCheck={() => this.setState({firstChecked: !this.state.firstChecked})}
                >
                    SmallBox
                </Checkbox>
                <Checkbox
                    checked={this.state.secondChecked}
                    onCheck={() => this.setState({secondChecked: !this.state.secondChecked})}
                >
                    BigBox
                </Checkbox>
                <Checkbox
                    checked={this.state.thirdChecked}
                    onCheck={() => this.setState({thirdChecked: !this.state.thirdChecked})}
                >
                    SBRE
                </Checkbox>
                <Button full onClick={this.onSubmit} style={{width: 150}}>
                    Submit
                </Button>
            </Fragment>
        )
    }
}

export default BasketConfigurationForm