import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                    <link rel='stylesheet' type='text/css' href='/static/styles.css' />
                </Head>

                <body>
                    <div className="root">
                        <Main />
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
                    `}</style>
                </body>
            </html>
        )
    }
}
