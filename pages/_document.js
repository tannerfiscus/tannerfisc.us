import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'

import { blue1, blue2, gray3, gray7, green1, red1, transparentBorder } from '../constants/styles/variables'

export default class MyDocument extends Document {
    render() {

        const head = Helmet.rewind()

        return (
            <html>
                <Head>
                    { head.title.toComponent() }
                    <meta charSet='utf-8' />
                    <meta content='IE=edge,chrome=1' httpEquiv='X-UA-Compatible' />
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <meta name='author' content='Tanner Fiscus' />
                    <meta name='keywords' content='Tanner,Tanner Fiscus,Fiscus,Web design,Web Designer,Web developer,Front-end,Front end,Pittsburgh front end, Pittsburgh front-end, Pittsburgh website,Pittsburgh Web Design,Pittsburgh Website,Pittsburgh Web,Pittsburgh Web Designer,Front-end designer,Front-end developer,React.js developer,ReactJS developer' />
                    { head.meta.toComponent() }
                    <link rel='shortcut icon' href='/assets/favicons/favicon.ico' />
                    <link rel='icon' sizes='16x16 32x32 64x64' href='/static/images/favicons/favicon.ico' />
                    <link rel='icon' type='image/png' sizes='32x32' href='/static/images/favicons/favicon-32x32.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/static/images/favicons/favicon-16x16.png' />
                    <link rel='apple-touch-icon' href='/static/images/favicons/apple-touch-icon.png' />
                    <link rel='stylesheet' type='text/css' href='/static/styles.css' />

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
                </Head>

                <body>
                    <div className="root">
                        <Main />
                        <div id="modal-root"></div>
                    </div>
                    <div id="modal-root"></div>

                    <NextScript />

                    {
                        /* http://meyerweb.com/eric/tools/css/reset/
                           v2.0 | 20110126
                           License: none (public domain)
                        */
                    }
                    <style global jsx>{`
                        html, body, div, span, applet, object, iframe,
                        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
                        a, abbr, acronym, address, big, cite, code,
                        del, dfn, em, img, ins, kbd, q, s, samp,
                        small, strike, strong, sub, sup, tt, var,
                        b, u, i, center,
                        dl, dt, dd, ol, ul, li,
                        fieldset, form, label, legend,
                        table, caption, tbody, tfoot, thead, tr, th, td,
                        article, aside, canvas, details, embed,
                        figure, figcaption, footer, header, hgroup,
                        menu, nav, output, ruby, section, summary,
                        time, mark, audio, video {
                            box-sizing: border-box;
                            margin: 0;
                            padding: 0;
                            border: 0;
                            font-size: 100%;
                            font: inherit;
                            vertical-align: baseline;
                        }
                        article, aside, details, figcaption, figure,
                        footer, header, hgroup, menu, nav, section {
                            display: block;
                        }
                        body {
                            line-height: 1.3;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: grayscale;
                        }
                        ol, ul {
                            list-style: none;
                        }
                        blockquote, q {
                            quotes: none;
                        }
                        blockquote:before, blockquote:after,
                        q:before, q:after {
                            content: '';
                            content: none;
                        }
                        table {
                            border-collapse: collapse;
                            border-spacing: 0;
                        }
                        p + p {
                            margin-top: 1rem;
                        }
                        .print-only {
                            display: none;
                        }
                        .screen-only {
                            display: block;
                        }

                        a {
                            border-bottom: 1px dashed transparent;
                            color: ${blue1};
                            position: relative;
                            text-decoration: none;
                            transition: border-color 0.2s ease, color 0.2s ease;
                        }

                        a:active {
                            top: 1px;
                        }

                        :global(body:not(.touch-device)) a:hover {
                            border-color: ${blue2};
                            color: ${blue2};
                        }
                    `}</style>
                </body>
            </html>
        )

    }

}
