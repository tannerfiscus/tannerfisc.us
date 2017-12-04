import classnames from 'classnames'
import Link from 'next/link'

const Logo = ({ footer, small }) => (
    <div className={classnames({
        logo: true,
        'logo-footer': footer,
        'logo-small': small,
    })}>
        <Link href='/'>
            <a className='logo-link' style={{color:'inherit'}} href="/">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 114.000000 123.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g
                        transform="translate(0.000000,123.000000) scale(0.100000,-0.100000)"
                        fill="currentColor"
                        stroke="none"
                    >
                        <path d="M503 1206 c-65 -21 -381 -206 -424 -250 -60 -60 -69 -104 -69 -346 0 -242 9 -286 69 -347 49 -49 380 -238 444 -254 72 -17 120 0 321 114 284 162 286 166 286 487 0 320 -3 325 -279 484 -220 126 -260 139 -348 112z m357 -406 c0 -19 -7 -20 -105 -20 l-105 0 0 -90 0 -90 75 0 c68 0 75 -2 75 -20 0 -18 -7 -20 -75 -20 l-75 0 0 -95 c0 -95 0 -95 -25 -95 l-25 0 0 205 0 205 -60 0 -60 0 0 -205 0 -205 -25 0 -25 0 0 205 0 205 -65 0 c-58 0 -65 2 -65 20 0 20 7 20 280 20 273 0 280 0 280 -20z" />
                    </g>
                </svg>
            </a>
        </Link>

        <style jsx>{`
            @keyframes logo-color-transition {
                0% {
                    color: red;
                }
                16.67% {
                    color: orange;
                }
                33.33% {
                    color: yellow;
                }
                50% {
                    color: green;
                }
                66.67% {
                    color: blue;
                }
                83.33% {
                    color: purple;
                }
            }

            .logo {
                margin: 0.75rem 0;
            }

            .logo:hover {
                animation: logo-color-transition 1.4s ease infinite;
            }

            .logo-footer {
                margin: 0;
                width: 3em;
            }

            .logo-small {
                width: 3em;
            }
        `}</style>
    </div>
)

export default Logo
