import Footer from '../Footer'
import Header from '../Header'
import React from 'react'

export default ({ children }) => (
    <div>
        <Header />

        <main>

            { children }

        </main>

        <Footer />

        <style jsx>{`
            main {
                padding: 6rem 0 0;
            }
        `}</style>
    </div>
)