import React from 'react';
import { TransitionState } from 'gatsby-plugin-transition-link';

import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';

import './Layout.css';
import Page from './Page';

const Layout = ({ children, pageTitle }) => (
	<>
		<Helmet>
			<html lang="en" />
			<link rel="shortcut icon" href="/img/favicon.ico" />
			<link rel="stylesheet" type="text/css" href={withPrefix('font/font.css')} />
			<link rel="manifest" href="/manifest.json" />
			<script>
			{`
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
				ga('create', 'UA-88460716-1', 'auto');
				ga('send', 'pageview');
			`}
			</script>
		</Helmet>

		<TransitionState>
			{({ transitionStatus, ...otherProps }) => (
				<Page
					pageTitle={pageTitle}
					otherProps={otherProps}
					transitionStatus={transitionStatus}
				>
					{ children }
				</Page>
			)}
		</TransitionState>
	</>
)

export default Layout
