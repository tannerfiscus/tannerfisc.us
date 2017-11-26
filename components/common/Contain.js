import React from 'react'

const Contain = ({ children }) => (
    <div>
        {children}

        <style jsx>{`
            padding: 0 2rem;
            margin: 0 auto;
            max-width: 90rem;
        `}</style>
    </div>
)

export default Contain
