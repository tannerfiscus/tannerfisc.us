import React from 'react';

import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import styles from './index-page.module.scss';
import Text from '../components/Text';

export const IndexPageTemplate = ({
  heading,
  subheading,
}) => (
  <>
    <Helmet
		meta={ [
			{ name: 'description', content: 'Hi, I\'m Tanner. I\'m a front-end engineer living in the bay area. I have a passion for building a better web.' },
			{ property: 'og:title', content: 'Tanner Fiscus' },
			{ property: 'og:description', content: 'Front-end developer and designer living in Toronto, Canada.' },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:url', content: 'https://tannerfisc.us' },
			{ property: 'og:image', content: 'https://tannerfisc.us/img/og/home.jpg' }
		] }
		title='Tanner Fiscus – Front-end Developer and Designer'
	/>
	
	<main className={styles['home']}>
		<div>
			<div className={styles['wave']}>
				<span aria-label="Hand wave" className={styles['waveEmoji']} role="img">👋</span>
			</div>
			<h1 className={styles['homeIntroTitle']}>{heading}</h1>
			<Text className={styles['homeIntroText']}>{subheading}</Text>
		</div>
	</main>
  </>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate {...frontmatter} />
    </Layout>
  )
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        subheading
      }
    }
  }
`
