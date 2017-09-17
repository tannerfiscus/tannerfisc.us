import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Navigation = () => (
    <menu>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/resume">
          <a style={linkStyle}>Resume</a>
        </Link>
        <Link href="/portfolio">
          <a style={linkStyle}>Portfolio</a>
        </Link>
        <Link href="/contact">
          <a style={linkStyle}>Contact</a>
        </Link>
    </menu>
)

export default Navigation
