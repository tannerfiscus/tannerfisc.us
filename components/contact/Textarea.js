import classnames from 'classnames'
import React from 'react'

import { withFormFieldBehavior } from './form-field'

const Textarea = ({ isDirty, isEmpty, label, name, onBlur, onKeyUp, pattern }) => {
    return (
        <div className={classnames('textarea', {
            'has-value': !isEmpty,
            'is-dirty': isDirty,
        })}>

            <textarea
                id={name}
                name={name}
                onBlur={onBlur}
                onKeyUp={onKeyUp}
                pattern={pattern}
                required
            />

            <label htmlFor={name}>
                {label}
            </label>

            <style jsx>{`
                .textarea {
                    padding: 2rem 0 0;
                    position: relative;
                    text-align: left;
                }

                textarea {
                    min-height: 14rem;
                }
            `}</style>

        </div>
    )
}

export default withFormFieldBehavior(Textarea)
