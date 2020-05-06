import React from 'react';
import Markdown from 'react-markdown';

import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import styles from './portfolio-page.module.scss';
import Text from '../components/Text';

export const PortfolioItemTemplate = ({
	content,
	date,
	featuredHeaderImage,
	slug,
	technologies = [],
	timeline = [],
	title,
}) => {
	const hasTechnologies = Array.isArray(technologies) && technologies.length > 1;
	const hasTimeline = Array.isArray(timeline) && timeline.length > 1;
	const hasSidebarContent = hasTechnologies || hasTimeline;

	return (
		<>
			<Helmet
				meta={ [
					{ name: 'description', content: `Find out what went into building ${title} with a detailed page summary.` },
					{ property: 'og:title', content: `${title} – a project by Tanner Fiscus` },
					{ property: 'og:description', content: 'A detailed look at one of the projects I\'ve developed.' },
					{ property: 'og:type', content: 'website' },
					{ property: 'og:url', content: `https://tannerfisc.us/${slug}` },
					{ property: 'og:image', content: 'https://tannerfisc.us/img/og/portfolio.jpg' }
				] }
				title={`${title} – Project Details – Tanner Fiscus`}
			/>

			<div className={styles.portfolioCover}>
				<PreviewCompatibleImage
					imageInfo={{
						image: featuredHeaderImage,
						alt: `Image showing the ${title} portfolio item on a web browser`,
					}}
				/>
			</div>

			<main className={styles.portfolioContent}>
				<div className={styles.portfolioContentLeft}>
				{
					content ? content.map(({ description, title }) => (
						<section className={styles.portfolioDescription} key={title}>
							<h2>{ title } </h2>
							<Markdown source={description} />
						</section>
					)): null
				}

					<Text bold className={`${styles.portfolioDate} ${styles.portfolioDateTop}`}>
						Last updated: {date}
					</Text>
				</div>	
				
				{ hasSidebarContent ?
					<div className={styles.portfolioContentRight}>
						{ hasTechnologies && (
							<React.Fragment>
								<h3>Applicable Technologies</h3>
								<div className={styles.portfolioPills}>
								{
									technologies.map(category => (
										<div className={styles.portfolioPill} key={category}>
											{ category }
										</div>
									))
								}
								</div>
							</React.Fragment>
						) }
						{ hasTimeline && (
							<React.Fragment>
								<h3>Timeline of Events</h3>
								<div className={styles.portfolioTimeline}>
								{
									timeline.map(timeline => (
										<div className={styles.portfolioPill} key={timeline.time}>
											<div className={styles.portfolioTimelineTime}>
												{ timeline.time }
											</div>
											{ timeline.description }
										</div>
									))
								}
								</div>
							</React.Fragment>
						) }
					</div> : null
				}
				
				<Text bold className={`${styles.portfolioDate} ${styles.portfolioDateBottom}`}>
					Last updated: {date}
				</Text>
			</main>
		</>
	)
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout pageTitle={post.frontmatter.title}>
      <PortfolioItemTemplate {...post.frontmatter} slug={post.fields.slug} />
    </Layout>
  )
};

export default BlogPost;

export const pageQuery = graphql`
  query PortfolioPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
	  fields {
		  slug
	  }
      frontmatter {
		content {
			description
			title
		}
        date(formatString: "MMMM YYYY")
		featuredHeaderImage {
			childImageSharp {
				fluid(maxWidth: 2000, quality: 100) {
					...GatsbyImageSharpFluid
				}
			}
		}
		technologies
        title
		timeline {
			time
			description
		}
      }
    }
  }
`
