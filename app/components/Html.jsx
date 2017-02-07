import Helmet from 'react-helmet'
import React  from 'react'

const assets = require('json!../../build/webpack-assets.json')

class Html extends React.Component {

    render() {
        const head = Helmet.rewind()

        return (
            <html>
                <head>
                    { head.title.toComponent() }
                    <meta charSet='utf-8' />
                    <meta content='IE=edge,chrome=1' httpEquiv='X-UA-Compatible' />
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <meta name='author' content='Tanner Fiscus' />
                    <meta name='keywords' content='Tanner,Tanner Fiscus,Fiscus,Web design,Web Designer,Web developer,Front-end,Front end,Pittsburgh front end, Pittsburgh front-end, Pittsburgh website,Pittsburgh Web Design,Pittsburgh Website,Pittsburgh Web,Pittsburgh Web Designer,Front-end designer,Front-end developer,React.js developer,ReactJS developer' />
                    { head.meta.toComponent() }
                    <link rel='shortcut icon' href='/assets/favicons/favicon.ico' />
                    <link rel='icon' sizes='16x16 32x32 64x64' href='/assets/favicons/favicon.ico' />
                    <link rel='icon' type='image/png' sizes='196x196' href='/assets/favicons/favicon-192.png' />
                    <link rel='icon' type='image/png' sizes='160x160' href='/assets/favicons/favicon-160.png' />
                    <link rel='icon' type='image/png' sizes='96x96' href='/assets/favicons/favicon-96.png' />
                    <link rel='icon' type='image/png' sizes='64x64' href='/assets/favicons/favicon-64.png' />
                    <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicons/favicon-32.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicons/favicon-16.png' />
                    <link rel='apple-touch-icon' href='/assets/favicons/favicon-57.png' />
                    <link rel='apple-touch-icon' sizes='60x60' href='/assets/favicons/favicon-60.png' />
                    <link rel='apple-touch-icon' sizes='72x72' href='/assets/favicons/favicon-72.png' />
                    <link rel='apple-touch-icon' sizes='76x76' href='/assets/favicons/favicon-76.png' />
                    <link rel='apple-touch-icon' sizes='114x114' href='/assets/favicons/favicon-114.png' />
                    <link rel='apple-touch-icon' sizes='120x120' href='/assets/favicons/favicon-120.png' />
                    <link rel='apple-touch-icon' sizes='144x144' href='/assets/favicons/favicon-144.png' />
                    <link rel='apple-touch-icon' sizes='152x152' href='/assets/favicons/favicon-152.png' />
                    <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicons/favicon-180.png' />
                    <link rel='stylesheet' type='text/css' href={ assets.style.css } />

                    <script
                        dangerouslySetInnerHTML={ { __html: `
                        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                        ga('create', 'UA-88460716-1', 'auto');
                        ga('send', 'pageview');
                        `} }>
                    </script>
                </head>

                <body>
                    <div className='app-wrapper' id='app'
                        dangerouslySetInnerHTML={ { __html: this.props.markup } }>
                    </div>

                    <script
                        dangerouslySetInnerHTML={ { __html: `
                            window.__PRELOADED_STATE__ = ${ JSON.stringify(this.props.preloadedState) }` } }>
                    </script>
                    <script src={ assets.client.js }></script>

                </body>
            </html>
        );
    }
}

export default Html
