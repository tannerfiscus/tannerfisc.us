import Layout from '../components/common/Layout'

const PortfolioItem = ({ url }) => (
  <Layout>
      <h1>{url.query.id}</h1>
      <p>This is the portfolio item page for {url.query.id}.</p>
  </Layout>
)

export default PortfolioItem
