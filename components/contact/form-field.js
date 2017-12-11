import React from 'react'

export const withFormFieldBehavior = WrappedComponent => {

    return class FormField extends React.PureComponent {
        constructor(props) {
            super(props)

            this.handleBlur = this.handleBlur.bind(this)

            this.state = {
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

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    isEmpty={this.state.isEmpty}
                    onBlur={this.handleBlur}
                />
            )
        }
    }

}
