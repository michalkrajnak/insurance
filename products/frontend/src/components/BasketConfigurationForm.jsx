import React, { Component, Fragment } from 'react'
import { Checkbox } from '@codex/basics'
import { Button } from '@codex/basics'

class BasketConfigurationForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            SB: false,
            BB: false,
            SBRE: false
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
                    checked={this.state.SB}
                    onCheck={() => this.setState({SB: !this.state.SB})}
                >
                    SmallBox
                </Checkbox>
                <Checkbox
                    checked={this.state.BB}
                    onCheck={() => this.setState({BB: !this.state.BB})}
                >
                    BigBox
                </Checkbox>
                <Checkbox
                    checked={this.state.SBRE}
                    onCheck={() => this.setState({SBRE: !this.state.SBRE})}
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