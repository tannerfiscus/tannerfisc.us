import APIError				 from '../APIError'
import Collection	 		 from '../Collection'
import CollectionItem 		 from '../CollectionItem'
import Cover	   	 		 from '../Cover'
import { buildBlogImageUrl,
	     formatCategoryTitle,
		 getBlogPost }   	 from '../../utils/blog'
import Helmet 	     		 from 'react-helmet'
import { Link } 			 from 'react-router'
import Loading		 		 from '../foundation/Loading'
import NotFound      		 from '../NotFound'
import PageContent 	 		 from '../foundation/PageContent'
import React 		 		 from 'react'
import ReactDOM		 		 from 'react-dom'
import { scrollToTop }		 from '../../utils/scroll'

class BlogCategory extends React.Component {

	static loadProps({ params: { category, postFragment } }, cb) {
		getBlogPost(category, postFragment)
			.then(data => {
				const post = data.post && data.post[0] ? data.post[0] : null

				cb(null, {
					post: {
						data: post,
						error: false,
						notFound: post ? false : true
					}
				})
			})
			.catch(err => {
				cb(null, {
					post: {
						data: {},
						error: true,
						notFound: false
					}
				})
			})
	 }

	render() {
		const { category, postFragment } = this.props.params
		const { data, error, notFound } = this.props.post

		if (!!notFound) {
			return <NotFound />
		}
		return (
			<section className="page-blog-post">

				<Helmet
					meta={ [
						{ name: 'description', content: `A blog post by Tanner Fiscus` },
						{ property: 'og:title', content: `${data.title}` },
						{ property: 'og:description', content: 'An online notebook entry by Tanner Fiscus' },
						{ property: 'og:type', content: 'article' },
						{ property: 'og:url', content: `https://tannerfisc.us/thoughts/${category}/${postFragment}/` },
						{ property: 'og:image', content: buildBlogImageUrl(data.cover) }
					] }
					title={ `${data.title}` } />

				{ (Object.keys(data).length < 1 && !error) &&
						<Loading /> }

				{ error && <APIError content={'this blog post'} /> }

				{ Object.keys(data).length > 0 &&
						this.renderPost(data) }

			</section>
		)
	}

	renderPost(post) {
		return (
			<div className="blog-post">
				<Cover
					backgroundImage={  buildBlogImageUrl(post.cover) }
					title={ post.title } />

				<PageContent>

					<div className="pad-section blog-post-wrapper">

						<div className="blog-post-breadcrumbs">
							<Link to='/thoughts/' onClick={ scrollToTop }>Thoughts</Link> about <Link to={ `/thoughts/${post.category}/` } onClick={ scrollToTop }>{ formatCategoryTitle(post.category) }</Link>
						</div>

						<div className="blog-post-date">
							{ post.date }
						</div>

						<section className="blog-post-content"
								  dangerouslySetInnerHTML={{ __html: post.body }}>
						</section>

					</div>

				</PageContent>
			</div>
		)
	}

}

export default BlogCategory
