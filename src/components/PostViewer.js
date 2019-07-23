import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      tagline
      title
    }
  }
`;

export default () => (
  <Query query={GET_PROJECTS}>
    {({ loading, data }) => !loading && (
      <table>
        <thead>
          <tr>
            <th>Tagline</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.projects.map(project => (
            <tr key={project.id}>
              <td>{project.tagline}</td>
              <td>{project.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </Query>
);