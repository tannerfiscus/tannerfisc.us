import Link from 'next/link'
import withLayout from '../utils/layout'

const PortfolioLink = ({ id, name }) => (
  <li>
    <Link as={`/portfolio/${id}`} href={`/portfolio-item?id=${id}`}>
      <a>{name}</a>
    </Link>
  </li>
)

const Post = (props) => (
    <div>
        <h1>Portfolio</h1>
        <ul>
            <PortfolioLink id="rmu" name="RMU" />
            <PortfolioLink id="tannerfisc.us" name="tannerfisc.us" />
            <PortfolioLink id="foxs-pizza" name="Fox's Pizza Den of Rural Valley, PA" />
        </ul>
    </div>
)

export default withLayout(Post)
