import React from 'react'

import Contain from './common/Contain'
import Grid from './common/grid/Grid'
import GridSection from './common/grid/GridSection'
import { gray3, gray7, transparentBorder } from '../constants/styles/variables'
import Logo from './Logo'

const Footer = () => (
    <footer className='footer'>
        <Contain>
            <Grid>
                <GridSection spread={3}>
                    <section>
                        &copy; 2018<br />
                        Tanner Fiscus
                    </section>
                </GridSection>
                <GridSection spread={3}>
                    <section>
                        Find Me Online<br/>
                        <a href="https://twitter.com/tannerfiscus" target="_blank">Twitter</a>
                        &nbsp;&bull;&nbsp;
                        <a href="https://www.linkedin.com/in/tannerfiscus" target="_blank">LinkedIn</a>
                    </section>
                </GridSection>
                <GridSection spread={3}>
                    <section>
                        Crafted with love in<br/>
                        Oakland, California
                    </section>
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

            a {
                color: ${gray3};
            }

            section {
                padding-bottom: 2rem;
            }
        `}</style>
    </footer>
)

export default Footer
