import { applyMiddleware,
         createStore }          from 'redux'
import AsyncProps               from 'async-props'
import { browserHistory }       from 'react-router'
import { Provider }             from 'react-redux'
import React                    from 'react'
import reducers                 from '../app/reducers'
import { render }               from 'react-dom'
import { Router }               from 'react-router'
import routes                   from '../routes'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk                    from 'redux-thunk'

const preloadedState = window.__PRELOADED_STATE__ || undefined

const store = createStore(reducers, preloadedState, applyMiddleware(thunk))
const history = syncHistoryWithStore(browserHistory, store)

const router = (
    <Provider store={ store }>
        <Router render={ (props) => <AsyncProps { ...props } /> } routes={ routes } history={ history } />
    </Provider>
)

render(router, document.getElementById('app'))
