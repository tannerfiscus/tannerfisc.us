import Bio         from './AboutBio'
import Callouts    from './AboutCallouts'
import Cover	   from '../Cover'
import Helmet 	   from 'react-helmet'
import Intro       from './AboutIntro'
import PageContent from '../foundation/PageContent'
import React       from 'react'
import Timeline    from './AboutTimeline'

const About = () => (

    <section className='page-about'>

        <Helmet
            meta={ [
                { name: 'description', content: 'View my experience, find out a little bit about me, and see why I have a passion for building a better web.' },
                { property: 'og:title', content: 'About Tanner Fiscus' },
                { property: 'og:description', content: `I'm passionate about building a better web` },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://tannerfisc.us/about/' },
                { property: 'og:image', content: 'https://tannerfisc.us/assets/og/about-me.jpg' }
            ] }
            title='About Me – Tanner Fiscus' />

        <Cover title={ `Hi, I'm Tanner` }
               backgroundImage='/assets/about-graphic.jpg' />

        <PageContent>

            <Intro />

            <Timeline />

            <Bio />

            <Callouts />

        </PageContent>

    </section>

)

export default About
