import APIError				    from '../APIError'
import Collection	 			from '../Collection'
import CollectionItem 			from '../CollectionItem'
import Cover	   	 			from '../Cover'
import { buildBlogImageUrl,
		 formatCategoryTitle,
		 getBlog }   			from '../../utils/blog'
import Helmet 	     			from 'react-helmet'
import { Link } 				from 'react-router'
import Loading		 			from '../foundation/Loading'
import PageContent 	 			from '../foundation/PageContent'
import React 		 			from 'react'
import ReactDOM		 			from 'react-dom'
import { scrollToTop }			from '../../utils/scroll'

class Blog extends React.Component {
	constructor(props, context) {
		super(props, context)

		this.state = { error: false, blog: {} }
	}

	static loadProps(params, cb) {
		getBlog()
			.then((blogData) => {
				cb(null, { blog: blogData, error: false })
			})
			.catch(err => {
				cb(null, { blog: {}, error: true })
			})
	 }

	render() {
		return (
			<section className="page-blog">

				<Helmet
					meta={ [
						{ name: 'description', content: 'Thoughts is my online notebook (blog) for sharing what\'s on my mind.' },
						{ property: 'og:title', content: 'Thoughts' },
						{ property: 'og:description', content: 'An online notebook by Tanner Fiscus' },
						{ property: 'og:type', content: 'website' },
						{ property: 'og:url', content: 'https://tannerfisc.us/thoughts/' },
						{ property: 'og:image', content: 'https://tannerfisc.us/assets/og/thoughts.jpg' }
					] }
					title='Thoughts – An Online Notebook by Tanner Fiscus' />

				<Cover
					backgroundImage="/assets/blog-graphic.jpg"
					title="Thoughts" />

				<PageContent>

					<div className="pad-section">

						{ (Object.keys(this.props.blog).length < 1 && !this.props.error) &&
								<Loading /> }

						{ !!this.props.error && <APIError content={'my blog'} /> }

						{ Object.keys(this.props.blog).length > 0 &&
								this.renderBlog(this.props.blog) }

					</div>

				</PageContent>

			</section>
		)
	}

	renderBlog(blogData) {
		return (
			<div className="grid padded">

				<div className="grid-spread-12 padded">
					<h5>Categories</h5>
					<div className="blog-categories">
						{ this.renderCategories(blogData.categories) }
					</div>
				</div>

				<div className="grid-spread-12 padded">
					<h5 className="blog-recent-posts-title">Recent Posts</h5>
					<Collection>
						{ this.renderBlogPosts(blogData.posts) }
					</Collection>
				</div>

			</div>
		)
	}

	renderBlogPosts(posts) {
		return posts.map((post, i) => {
			const tagline = `${post.date} · ${formatCategoryTitle(post.category)}`
			return <CollectionItem
						description={ post.body.substring(0, 500) }
						image={ buildBlogImageUrl(post.cover) }
						key={ i }
						tagline={ tagline }
						title={ post.title }
						url={ `/thoughts/${post.category}/${post.url}/` } />
		})
	}

	renderCategories(categories) {
		return categories.map((category) => {
			return (
				<Link className='button button-deflate button-inverted'
					  onClick={ scrollToTop }
				   	  to={ `/thoughts/${category.name}/` }
				   	  key={ category.name }>

				   { formatCategoryTitle(category.name).toUpperCase() }

				</Link>
			)
		})
	}

}

export default Blog
