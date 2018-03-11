import Helmet from 'react-helmet'
import React from 'react'

import BackdropTitle from '../components/common/BackdropTitle'
import { breakpointMedium, breakpointMobile } from '../constants/styles/variables'
import ContactButtons from '../components/contact/ContactButtons'
import Contain from '../components/common/Contain'
import HighlightedSection from '../components/common/HighlightedSection'
import Layout from '../components/common/Layout'

const Contact = () => (
    <Layout>

        <Helmet
            meta={ [
                { name: 'description', content: 'An online form for connecting with me.' },
                { property: 'og:title', content: 'About Tanner Fiscus' },
                { property: 'og:description', content: `Let's connect on social media` },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://tannerfisc.us/contact/' },
                { property: 'og:image', content: 'https://tannerfisc.us/static/images/og/contact.jpg' }
            ] }
            title={`Let's Chat – Tanner Fiscus`}
        />

        <Contain>

            <BackdropTitle
                backdrop="Hi there!"
                title="Let's chat."
            />
        </Contain>

        <HighlightedSection>
            <div className='contact-form'>
                <section>
                    <ContactButtons />
                </section>
            </div>
        </HighlightedSection>

        <style jsx>{`
            .contact-form {
                text-align: center;
                margin: 0 1rem;
                min-height: calc(100vh - 21rem);
                padding: 2rem 0;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
            }

            @media only screen and (min-width: ${breakpointMobile}) {
                .contact-form {
                    min-height: calc(100vh - 31rem);
                }
            }

            @media only screen and (min-width: ${breakpointMedium}) {
                .contact-form {
                    min-height: calc(100vh - 33.5rem);
                }
            }
        `}</style>

    </Layout>
)

export default Contact;
