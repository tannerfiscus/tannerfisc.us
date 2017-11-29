import React from 'react'

const Grid = ({ children }) => (
    <div className='grid'>
        { children }

        <style jsx>{`
            .grid {
            	display: flex;
            	flex-wrap: wrap;
            	justify-content: center;
            	width: 100%;
            }

            .grid + .grid {
            	margin: 1rem 0 0;
            }
        `}</style>
    </div>
)

export default Grid
