import React from 'react'

import Button from '../common/Button'
import Input from './Input'
import Textarea from './Textarea'

const ContactForm = () => {
    return (
        <form>

            <Input
                label='Name'
                name='contact-name'
            />

            <Input
                label='Email'
                name='contact-email'
                text='email'
            />

            <Textarea
                label='Message'
                name='contact-message'
            />

            <div className='button'>
                <Button inverted>
                    Send Message
                </Button>
            </div>

            <style jsx>{`
                form {
                    margin: 1rem auto 0;
                    max-width: 44rem;
                }

                .button {
                    padding: 2rem 0 0;
                    text-align: right;
                }
            `}</style>

        </form>
    )
}

export default ContactForm
