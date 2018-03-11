import Helmet from 'react-helmet'
import React from 'react'

import Layout from '../components/common/Layout'
import Resume from '../components/resume/Resume';

const ResumePage = () => (
  <Layout>

      <Helmet
          meta={ [
              { property: 'og:title', content: 'Resume – Tanner Fiscus' },
              { property: 'og:type', content: 'website' },
              { property: 'og:url', content: 'https://tannerfisc.us/resume/' },
              { property: 'og:image', content: 'https://tannerfisc.us/images/static/og/portfolio.jpg' }
          ] }
          title='Resume – Tanner Fiscus'
    />

    <Resume />

  </Layout>
)

export default ResumePage;
