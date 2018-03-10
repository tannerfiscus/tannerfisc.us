import 'isomorphic-fetch'

import { buildAPIUrl } from '../utils/url'
import Project from '../components/project/Project'

class PortfolioItem extends React.PureComponent {

    static async getInitialProps({ query }) {
        const res = await fetch(buildAPIUrl(`/portfolio/item/${query.id}/`))
        const json = await res.json()
        return { item: json }
    }

    render() {
        return <Project item={this.props.item} />
    }
}

export default PortfolioItem
