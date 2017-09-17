import withLayout from '../utils/layout'

const PortfolioItem = ({ url }) => (
  <div>
      <h1>{url.query.id}</h1>
      <p>This is the portfolio item page for {url.query.id}.</p>
  </div>
)

export default withLayout(PortfolioItem)
