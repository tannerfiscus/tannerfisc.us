import classnames from 'classnames'
import React from 'react'

import { withFormFieldBehavior } from './form-field'

const Textarea = ({ isEmpty, label, name, onBlur }) => {
    return (
        <div className={classnames('textarea', {
            'has-value': !isEmpty,
        })}>

            <textarea
                id={name}
                name={name}
                onBlur={onBlur}
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
