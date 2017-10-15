import Link from 'next/link'

import { gray1, gray3, gray5 } from '../constants/styles/variables';

const Navigation = () => (
    <menu>
        <section>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/resume">
              <a>Resume</a>
            </Link>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
        </section>

        <style jsx>{`
            menu {
                align-items: center;
                display: flex;
                flex: 0;
            }

            section:hover a:not(:hover) {
                color: ${gray5};
            }

            a, a:visited, a:active, a:hover {
                color: ${gray3};
                text-decoration: none;
                transition: color 0.3s ease;
                will-change: color;
            }

            a:hover {
                color: ${gray1};
            }

            a + a {
                margin: 0 0 0 1.5rem;
            }
        `}</style>
    </menu>
)

export default Navigation
