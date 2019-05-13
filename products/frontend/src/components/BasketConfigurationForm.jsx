import React, { Component, Fragment } from 'react'
import { Button, Checkbox, H1 } from '@codex/basics'
import { connect } from 'react-redux'
import { submitProductTypes } from '../reducer'

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
                <H1>Basket configuration</H1>
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
                <Button full onClick={() => this.props.submitProductTypes(this.state)} style={{width: 150}}>
                    Submit
                </Button>
            </Fragment>
        )
    }
}

export default connect(() => ({}), {submitProductTypes})(BasketConfigurationForm)
