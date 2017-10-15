import Footer from '../components/Footer'
import Header from '../components/Header'

export default function(WrappedComponent) {
    return (props) => (
        <div>

            <Header />

            <main>

                <WrappedComponent {...props} />

            </main>

            <Footer />

            <style jsx>{`
                main {
                    min-height: calc(100vh - 11rem);
                    padding: 6rem 0 0;
                }
            `}</style>
        </div>
    )
}
