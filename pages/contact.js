import BackdropTitle from '../components/common/BackdropTitle'
import { breakpointMedium, breakpointMobile } from '../constants/styles/variables'
import ContactButtons from '../components/contact/ContactButtons'
import Contain from '../components/common/Contain'
import HighlightedSection from '../components/common/HighlightedSection'
import Layout from '../components/common/Layout'

const Contact = () => (
    <Layout>
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
