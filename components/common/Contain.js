import React from 'react'

const Contain = ({ children }) => (
    <div>
        {children}

        <style jsx>{`
            padding: 0 2rem;
        `}</style>
    </div>
)

export default Contain
