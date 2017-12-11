import BackdropTitle from '../components/common/BackdropTitle'
import ContactForm from '../components/contact/ContactForm'
import Contain from '../components/common/Contain'
import Heading from '../components/common/Heading'
import HighlightedSection from '../components/common/HighlightedSection'
import Layout from '../components/common/Layout'

const Contact = () => (
    <Layout>
        <Contain>

            <BackdropTitle
                backdrop="Let's chat."
                title="How are you today?"
            />
        </Contain>

        <HighlightedSection>
            <div className='contact-form'>

                <Heading size={5}>
                    Fill out the form below and I&#39;ll be in touch soon
                </Heading>

                <ContactForm />
                
            </div>
        </HighlightedSection>

        <style jsx>{`
            .contact-form {
                text-align: center;
                min-height: calc(100vh - 38rem);
                padding: 2rem 0;
            }
        `}</style>

    </Layout>
)

export default Contact;
