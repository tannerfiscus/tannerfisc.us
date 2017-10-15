import React from 'react'

import Contain from './common/Contain';
import { transparentBorder } from '../constants/styles/variables';

const Footer = () => (
    <footer className='footer'>
        <Contain>
            Footer!
        </Contain>

        <style jsx>{`
            box-shadow: ${`0 0 8px ${transparentBorder}`};
            padding: 2rem 0;
        `}</style>
    </footer>
)

export default Footer
