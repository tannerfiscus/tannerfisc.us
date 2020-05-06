import React from 'react';

import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import AboutExperiences from '../components/About/AboutExperiences';
import Layout from '../components/Layout';
import styles from './about-page.module.scss';

export const AboutPageTemplate = ({ experiences, sections, tagline }) => (
	<>
		<Helmet
			meta={ [
				{ name: 'description', content: 'View my experience, find out a little bit about me, and see why I have a passion for building a better web.' },
				{ property: 'og:title', content: 'About Tanner Fiscus' },
				{ property: 'og:description', content: `I'm passionate about building a better web` },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: 'https://tannerfisc.us/about/' },
				{ property: 'og:image', content: 'https://tannerfisc.us/img/og/about-me.jpg' }
				] }
			title='About Me – Tanner Fiscus'
		/>

	{
		sections.map(({ section }, i) => (
			<p key={i}>{section}</p>
		))
	}

		<div className={styles.aboutTagline}>
			<p className={styles.aboutTaglineText}>
				{tagline}
			</p>
		</div>
		
		<h2>My experiences</h2>
		<AboutExperiences experiences={experiences} />
	</>
);

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout pageTitle={frontmatter.title}>
      <AboutPageTemplate {...frontmatter} />
    </Layout>
  )
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        sections {
          section
        }
        tagline
        experiences {
          experience {
            timeline
            name
            title
            description
          }
        }
      }
    }
  }
`
