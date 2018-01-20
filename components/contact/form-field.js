import React from 'react'

export const withFormFieldBehavior = WrappedComponent => {

    return class FormField extends React.PureComponent {
        constructor(props) {
            super(props)

            this.handleBlur = this.handleBlur.bind(this)
            this.handleKeyUp = this.handleKeyUp.bind(this)

            this.state = {
                isDirty: false,
                isEmpty: true,
            }
        }

        handleBlur(e) {
            if (e.target.value && this.state.isEmpty) {
                this.setState({ isEmpty: false })
            } else if (!e.target.value && !this.state.isEmpty) {
                this.setState({ isEmpty: true })
            }
        }

        handleKeyUp() {
            if (!this.state.isDirty) {
                this.setState({ isDirty: true })
            }
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    isDirty={this.state.isDirty}
                    isEmpty={this.state.isEmpty}
                    onBlur={this.handleBlur}
                    onKeyUp={this.handleKeyUp}
                />
            )
        }
    }

}
