const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const gql = require('graphql-tag');

const { buildASTSchema } = require('graphql');

const projects = require('./data');

const projectsById = projects.reduce((projectList, project) => ({
    ...projectList,
    [project.id]: project,
}), {});

// const POSTS = [
//   { author: "John Doe", body: "Hello world" },
//   { author: "Jane Doe", body: "Hi, planet!" },
// ];

const schema = buildASTSchema(gql`
  type Query {
    projects: [Project]
    project(id: ID!): Project
  }

  type Project {
    id: ID
    tagline: String
    title: String
  }
`);

const mapPost = (post, id) => post && ({ id, ...post });

const mapProject = (post, id) => post && ({ id, ...post });

const root = {
  posts: () => POSTS.map(mapPost),
  post: ({ id }) => mapPost(POSTS[id], id),
};

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: {
      projects: projects,
      project: ({ id }) => {
          console.log('id', id);
          console.log('projectsById', projectsById);
          return projectsById[id]
      },
  },
  graphiql: true,
}));

const port = process.env.PORT || 4000
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);