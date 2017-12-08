import React from 'react'

import Contain from './common/Contain'
import Grid from './common/grid/Grid'
import GridSection from './common/grid/GridSection'
import { gray7, transparentBorder } from '../constants/styles/variables'
import Logo from './Logo'

const Footer = () => (
    <footer className='footer'>
        <Contain>
            <Grid>
                <GridSection spread={3}>
                    &copy; 2017<br />
                    Tanner Fiscus
                </GridSection>
                <GridSection spread={3}>
                    Find Me Online<br/>
                    Twitter · LinkedIn
                </GridSection>
                <GridSection spread={3}>
                    Crafted with love in<br/>
                    Oakland, California
                </GridSection>
                <GridSection spread={3}>
                    <div className='footer-logo'>
                        <Logo footer />
                    </div>
                </GridSection>
            </Grid>
        </Contain>

        <style jsx>{`
            footer {
                background: ${gray7};
                padding: 3rem 0 1rem;
            }

            .footer-logo {
                align-items: flex-end;
                display: flex;
                justify-content: flex-end;
            }
        `}</style>
    </footer>
)

export default Footer
