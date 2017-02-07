import bodyParser   from 'body-parser'
import compression  from 'compression'
import express      from 'express'
import path         from 'path'
import render       from './render'

const app = express()

app.disable('x-powered-by');

// Allows gzipping
app.use(compression({
    filter: function(args) { return true; }
}));

app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, '..', '/static/assets')));
app.use('/public', express.static(path.join(__dirname, '..', '/build'), { maxAge: '1y' }));

app.use(render);

// Error handling
app.use(function (err, req, res, next) {
    console.log('500 ERROR!', err);
    res.status(500).sendFile('/500.html', { root: __dirname } );
});

app.listen(3001, function(err) {
    console.log('Listening on port: ', 3001, '\n');
});
