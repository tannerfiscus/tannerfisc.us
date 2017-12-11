import classnames from 'classnames'
import React from 'react'

import { withFormFieldBehavior } from './form-field'

const Input = ({ isEmpty, label, name, onBlur, type }) => {\
    return (
        <div className={classnames('input', {
            'has-value': !isEmpty,
        })}>

            <input
                id={name}
                name={name}
                onBlur={onBlur}
                type={type}
            />

            <label htmlFor={name}>
                {label}
            </label>

            <style jsx>{`
                .input {
                    padding: 2rem 0 0;
                    position: relative;
                    text-align: left;
                }
            `}</style>

        </div>
    )
}

Input.defaultProps = {
    type: 'text',
}

export default withFormFieldBehavior(Input)
