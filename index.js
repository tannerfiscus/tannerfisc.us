const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const path = require('path');

const projects = require('./server/data');
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
], (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// For the portfolio section, let's make sure there's a known
// project included in the url before loading the page.
app.use('/portfolio/:projectId', (req, res) => {
  if (!req.params.projectId || projects.find(project => project.id === req.params.projectId)) {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  } else {
    res.redirect('/portfolio/');
  }
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