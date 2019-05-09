import React from 'react'
import { Checkbox } from "@codex/basics";

export class CheckboxList extends React.Component {
    constructor() {
        super()

            this.state = {
            checked: true
        }
    }

    render() {
        return (
            <React.Fragment>
                <Checkbox
                    checked={this.state.checked}
                />
            </React.Fragment>
        )
    }
}