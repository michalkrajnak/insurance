import React, {Component, Fragment} from 'react'
import {Checkbox} from '@codex/basics'

class InsuranceSelectionForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstChecked: false,
            secondChecked: false,
            thirdChecked: false
        }
    }

    render() {
        return (
            <Fragment>
                SmallBox
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

            </Fragment>
        )
    }
}

export default InsuranceSelectionForm
