import dynamic from 'next/dynamic'
import Helmet from 'react-helmet'
import React, { Fragment } from 'react'

import Loading from '../components/common/Loading'

const PortfolioItem = ({ url }) => {

    const DynamicProject = dynamic(
        import('../components/project/DynamicProject'),
        {
            loading: Loading,
            ssr: false,
        }
    )

    return (
        <Fragment>

            <Helmet title='Loading...' />

            <DynamicProject projectId={url.query.id} />

        </Fragment>
    );

}

export default PortfolioItem
