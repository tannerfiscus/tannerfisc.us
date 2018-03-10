import React from 'react'

const Heading = ({ children, size }) => {
    switch (size) {
        case 2:
            return (
                <h2>
                    {children}
                    <style jsx>{`
                        h2 {
                        	font-size: 2.3em;
                        	font-weight: 700;
                        	margin: 1rem 0;
                        }
                    `}</style>
                </h2>
            )
        case 3:
            return (
                <h3>
                    {children}
                    <style jsx>{`
                        h3 {
                        	font-size: 1.8em;
                        	font-weight: 400;
                        	margin: 2rem 0;
                        }
                    `}</style>
                </h3>
            )
        case 4:
            return (
                <h4>
                    {children}
                    <style jsx>{`
                        h4 {
                        	font-size: 1.5em;
                        	font-weight: 500;
                        	margin: 0 0 1rem;
                        }
                    `}</style>
                </h4>
            )
        case 5:
            return (
                <h5>
                    {children}
                    <style jsx>{`
                        h5 {
                        	font-size: 1.5em;
                        	font-weight: 400;
                        	margin: 0 0 1rem;
                        }
                    `}</style>
                </h5>
            )
        case 6:
            return (
                <h6>
                    {children}
                    <style jsx>{`
                        h6 {
                        	font-size: 1em;
                        	font-weight: 500;
                        	margin: 0 0 0.5rem;
                        }
                    `}</style>
                </h6>
            )
        default:
            return (
                <h1>
                    {children}
                    <style jsx>{`
                        h1 {
                        	font-size: 3em;
                        	font-weight: 300;
                        	letter-spacing: -0.04em;
                        	line-height: 1em;
                        	margin: 1rem 0;
                        }
                    `}</style>
                </h1>
            )
    }
}

export default Heading
