import Document, { Head, Main, NextScript } from 'next/document'

import { blue1, blue2, gray3, gray7, green1, red1, transparentBorder } from '../constants/styles/variables'

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

                        input[type='text'],
                        input[type='email'],
                        input[type='password'],
                        textarea {
                            -webkit-appearance: none;
                            background: transparent;
                            border: 2px solid ${gray3};
                            border-radius: 5px;
                            box-shadow: none;
                            box-sizing: border-box;
                            color: ${gray7};
                            display: block;
                            font-weight: 500;
                            font-size: 1rem;
                            height: 2.75rem;
                            padding: .9rem .75rem .75rem;
                            position: relative;
                            transition: border 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
                            width: 100%;
                            z-index: 1;
                        }

                        input[type='text']:focus,
                        input[type='email']:focus,
                        input[type='password']:focus,
                        textarea:focus {
                            border: 2px solid ${gray7};
                            box-shadow: 0 0 8px ${transparentBorder};
                            color: $gray3;
                            outline: none;
                        }

                        input[type='text']:focus + label,
                        input[type='email']:focus + label,
                        input[type='password']:focus + label,
                        textarea:focus + label {
                            color: ${gray7};
                            left: 0;
                            top: -0.1rem;
                        }

                        input[type='text']:valid,
                        input[type='email']:valid,
                        input[type='password']:valid,
                        textarea:valid {
                            border-color: ${green1};
                            color: ${green1};
                        }

                        input[type='text']:valid + label,
                        input[type='email']:valid + label,
                        input[type='password']:valid + label,
                        textarea:valid + label {
                            color: ${green1};
                        }

                        .is-dirty input[type='text']:invalid,
                        .is-dirty input[type='email']:invalid,
                        .is-dirty input[type='password']:invalid,
                        .is-dirty textarea:invalid {
                            border-color: ${red1};
                            color: ${red1};
                        }

                        .is-dirty input[type='text']:invalid + label,
                        .is-dirty input[type='email']:invalid + label,
                        .is-dirty input[type='password']:invalid + label,
                        .is-dirty textarea:invalid + label {
                            color: ${red1};
                        }

                        label {
                            color: ${gray3};
                            font-size: 1rem;
                            left: 0.75rem;
                            line-height: 2.75rem;
                            position: absolute;
                            top: 2.05rem;
                            transition: all 0.3s ease;
                            z-index: 0;
                        }

                        .has-value label {
                            left: 0;
                            top: -0.1rem;
                        }

                        a {
                            border-bottom: 1px dashed transparent;
                            color: ${blue1};
                            text-decoration: none;
                            transition: border-color 0.2s ease, color 0.2s ease;
                        }

                        a:hover {
                            border-color: ${blue2};
                            color: ${blue2};
                        }
                    `}</style>
                </body>
            </html>
        )
    }
}
