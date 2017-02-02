import APIError				 from '../APIError.jsx';
import Collection	 		 from '../Collection.jsx';
import CollectionItem 		 from '../CollectionItem.jsx';
import { buildBlogImageUrl,
		 formatCategoryTitle,
		 getBlogCategory }   from '../../utils/blog';
import Helmet 	     		 from 'react-helmet'
import Loading		 		 from '../foundation/Loading.jsx';
import NotFound      		 from '../NotFound.jsx';
import PageContent 	 		 from '../foundation/PageContent.jsx';
import React 		 		 from 'react';
import ReactDOM		 		 from 'react-dom';

class BlogCategory extends React.Component {

	static loadProps({ params: { category } }, cb) {
		getBlogCategory(category)
			.then(posts => {
				const notFound = (Array.isArray(posts) && posts.length) ? false : true

				cb(null, {
					category: {
						error: false,
						notFound,
						posts: notFound ? [] : posts
					}
				})
			})
			.catch(err => {
				cb(null, {
					category: {
						error: true,
						notFound: false,
						posts: []
					}
				})
			});
	 }

	render() {
		const { category } = this.props.params
		const { error, notFound, posts } = this.props.category
		const formattedCategory = formatCategoryTitle(category)

		if (!!notFound) {
			return <NotFound />
		}

		return (
			<section className="page-blog-category">

				<Helmet
					meta={ [
						{ name: 'description', content: `A collection of posts regarding my thoughts on ${formattedCategory}.` },
						{ property: 'og:title', content: `Thoughts on ${formattedCategory}` },
						{ property: 'og:description', content: 'An online notebook by Tanner Fiscus' },
						{ property: 'og:type', content: 'website' },
						{ property: 'og:url', content: `https://tannerfisc.us/thoughts/${category}/` },
						{ property: 'og:image', content: 'https://tannerfisc.us/static/og/thoughts.jpg' }
					] }
					title={ `Thoughts on ${formattedCategory} – An Online Notebook by Tanner Fiscus` } />

				<PageContent>

					<div className="pad-section blog-category-header">
						<h6>Category</h6>
						<h1>{ formatCategoryTitle(category) }</h1>
					</div>

					{ (Object.keys(posts).length < 1 && !error) &&
							<Loading /> }

					{ !!error && <APIError content={'my blog'} /> }

					{ Object.keys(posts).length > 0 &&
							this.renderPosts(posts) }

				</PageContent>

			</section>
		);
	}

	renderPosts(posts) {
		return (
			<Collection>
				{ this.renderBlogPosts(posts) }
			</Collection>
		);
	}

	renderBlogPosts(posts) {
		return posts.map((post, i) => {
			const tagline = `${post.date} · ${formatCategoryTitle(post.category)}`;
			return <CollectionItem
						description={ post.body.substring(0, 500) }
						image={ buildBlogImageUrl(post.cover) }
						key={ i }
						tagline={ tagline }
						title={ post.title }
						url={ `./${post.url}/` } />
		});
	}

}

export default BlogCategory;
