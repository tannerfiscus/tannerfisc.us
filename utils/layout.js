import { injectGlobal } from 'styled-components'

import Header from '../components/Header'

injectGlobal`
    body {
        font-family: 'HaboroSans', -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
    }
`

export default function(WrappedComponent) {
    return (props) => (
        <main>

            <Header />

            <WrappedComponent {...props} />

            <hr />
            Footer tbd

        </main>
    )
}
