const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const path = require('path');
const schema = require('./server/schema/schema');

const app = express();

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// Add all other client-side routes so that they're served the
// React app from the server-side
app.use([
  '/about/',
  '/contact/',
  '/portfolio/*'
], (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

// For all other routes, continue to send the React app,
// which will handle the proper page based on Reach Router
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
  res.status(404);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Running a GraphQL API server at localhost:${port}/graphql`);
});