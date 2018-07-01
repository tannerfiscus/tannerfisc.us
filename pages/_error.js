import Helmet from 'react-helmet'
import React from 'react'

import BackdropTitle from '../components/common/BackdropTitle'
import Contain from '../components/common/Contain'
import Layout from '../components/common/Layout'


export default class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode }
    }

    render() {

        const isPageNotFound = this.props.statusCode && this.props.statusCode === 404;

        return (
            <Layout>

                <Helmet title={ isPageNotFound ? 'Page Not Found' : 'Unexpected Error' } />

                <div className='error-page'>
                    <Contain>

                        <BackdropTitle
                            backdrop={ isPageNotFound ? '404' : 'We have a problem' }
                            title={ isPageNotFound ? 'Page Not Found' : 'an unexpected error occurred' }
                        />

                    </Contain>
                </div>

                <style jsx>{`
                    .error-page {
                        align-items: center;
                        display: flex;
                        min-height: calc(100vh - 108px);
                        justify-content: center;
                    }
                `}</style>

            </Layout>
        )
    }
}
