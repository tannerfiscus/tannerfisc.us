import Link from 'next/link'

import Contain from '../components/common/Contain'
import { gray1, gray3, gray4, gray8, transparentBorder } from '../constants/styles/variables';
import withLayout from '../utils/layout'

const Home = () => (
    <div>

        <Contain>
            <h1>Developer. <span>Designer.</span></h1>
        </Contain>

        <figure>
            <Contain>
                <figcaption>
                    <h2>Hi, I&#39;m Tanner.</h2>
                    <p>I&#39;m a front-end developer who is passionate about building a better web with beautiful experiences.</p>
                    <p>I specialize in Javascript development, particularly React.</p>
                    <p>I&#39;m currently working at Yelp in San Francisco.</p>
                    <Link href="/about">
                      <a>More about me &rarr;</a>
                    </Link>
                </figcaption>
            </Contain>
        </figure>

        Add timeline down here!!

        <style jsx>{`
            h1 {
                font-size: 4rem;
                padding: 14rem 32rem 2rem 0;
                padding: 30vh 32rem 2rem 0;
            }

            h2 {
                font-size: 1.5rem;
                font-weight: 700;
                margin: 0 0 2rem;
            }

            p {
                color: ${gray4};
                line-height: 1.25rem;
            }

            p + p {
                margin-top: 1rem;
            }

            a {
                color: ${gray3};
                display: inline-block;
                margin: 2rem 0 0;
                text-decoration: none;
            }

            a:hover {
                text-decoration: underline;
            }

            figure {
                background-image: url('/static/images/leaves.jpg');
                background-position: center;
                background-size: cover;
                display: flex;
                height: 20rem;
                justify-content: flex-end;
                position: relative;
                width: 100%;
            }

            figure::before {
                background: ${gray8};
                bottom: 0;
                content: '';
                left: 0;
                opacity: 0.1;
                position: absolute;
                right: 0;
                top: 0;
                z-index: 1;
            }

            figcaption {
                background: ${gray1};
                border-radius: 3px;
                box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
                color: ${gray8};
                display: inline-block;
                max-width: 30rem;
                padding: 3rem;
                position: relative;
                top: -4rem;
                z-index: 1;
            }
        `}</style>
    </div>
)

export default withLayout(Home)
