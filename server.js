const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.use((req, res, next) => {
            const test = /\?[^]*\//.test(req.url);
            if (req.url.substr(-1) === '/' && req.url.length > 1 && !test) {
                res.redirect(301, req.url.slice(0, -1));
            } else {
                next()
            }
        })

        server.get('/portfolio/:id', (req, res) => {
            // Should verify that the id exists and throw a 404 if not
            const actualPage = '/portfolio-item'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        const port = process.env.PORT || 8080

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
