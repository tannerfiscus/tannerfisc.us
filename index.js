const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const path = require('path');
const schema = require('./server/schema/schema');

const app = express();

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Running a GraphQL API server at localhost:${port}/graphql`);
});