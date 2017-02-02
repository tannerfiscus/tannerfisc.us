import { applyMiddleware,
         createStore }          from 'redux'
import AsyncProps,
       { loadPropsOnServer }    from 'async-props'
import Html                     from '../app/components/Html'
import { renderToStaticMarkup,
         renderToString }       from 'react-dom/server'
import { match,
         RouterContext }        from 'react-router'
import { Provider }             from 'react-redux'
import React                    from 'react'
import reducers                 from '../app/reducers'
import routes                   from '../routes'
import thunk                    from 'redux-thunk'

export default (req, res, next) => {

    match({ routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {

        if (error) {
            const appError = new Error(error)
                  appError.statusCode = 500
            next(appError)

        } else if (redirectLocation) {
            const redirectError = new Error(`Redirecting user to ${redirectLocation.pathname}${redirectLocation.search}`)
                  redirectError.statusCode = 302
            next(redirectError)

        } else if (renderProps) {
            const store = createStore(reducers, {}, applyMiddleware(thunk)),
                  preloadedState = store.getState()

            const loadContext = {}
            loadPropsOnServer(renderProps, loadContext, (err, asyncProps, scriptTag) => {

                const markup = renderToString(<Provider store={ store }>
                                                  <AsyncProps {...renderProps} {...asyncProps} />
                                              </Provider>)

                res.status(200).send(renderToStaticMarkup(<Html markup={ markup }
                                                                preloadedState={ preloadedState } />))
                return;
            })

        } else {
            const pageNotFoundError = new Error('Page Not Found')
                  pageNotFoundError.statusCode = 404
            next(pageNotFoundError)
        }

    });
}
