import React from 'react';

import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

import Layout from '../../components/Layout';
import LinkTransition from '../../components/LinkTransition';
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import styles from './portfolio.module.scss';
import Text from '../../components/Text';

const Portfolio = ({ data }) => {
	const { edges: posts } = data.allMarkdownRemark;

	return (
		<Layout pageTitle="Portfolio">
			<Helmet
				meta={ [
					{ name: 'description', content: 'Travel through time and catch a glimpse of the work that I\'ve developed over the years.' },
					{ property: 'og:title', content: 'My Work' },
					{ property: 'og:description', content: 'Online portfolio showcasing experiences built and designed by Tanner Fiscus' },
					{ property: 'og:type', content: 'website' },
					{ property: 'og:url', content: 'https://tannerfisc.us/portfolio/' },
					{ property: 'og:image', content: 'https://tannerfisc.us/img/og/portfolio.jpg' }
				] }
				title='My Work – Experiences Built and Designed by Tanner Fiscus'
			/>
				<div className={styles.portfolioList}>
					{posts.map(({ node: project }) => (
              <div key={project.fields.slug} className={styles.projectItem}>
                  <LinkTransition to={project.fields.slug}>
                      <small className={styles.portfolioItemTagline}>
                          { project.frontmatter.tagline }
                      </small>{' '}
                      <Text className={styles.portfolioItemTitle} bold>
                          { project.frontmatter.title }
                      </Text>
                      <div className={styles.portfolioItemImage}>
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: project.frontmatter.featuredIndexImage,
                            alt: `Image thumbnail for ${project.frontmatter.title} portfolio item`,
                          }}
                        />
                      </div>
                  </LinkTransition>
              </div>
          ))}
      </div>
		</Layout>
	)
};

export default () => (
  <StaticQuery
    query={graphql`
      query PortfolioIndexQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___sortOrder] }
          filter: { frontmatter: { templateKey: { eq: "portfolio-page" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
				tagline
                title
                featuredIndexImage {
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <Portfolio data={data} />}
  />
);
