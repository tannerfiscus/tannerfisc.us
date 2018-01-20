import classnames from 'classnames'
import React from 'react'

import { withFormFieldBehavior } from './form-field'

const Input = ({ isDirty, isEmpty, label, name, onBlur, onKeyUp, pattern, type }) => {
    return (
        <div className={classnames('input', {
            'has-value': !isEmpty,
            'is-dirty': isDirty,
        })}>

            <input
                id={name}
                name={name}
                onBlur={onBlur}
                onKeyUp={onKeyUp}
                pattern={pattern}
                required
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
