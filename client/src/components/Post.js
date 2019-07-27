import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export default () => {
    const id = "admin";
    return (
        <Query query={gql`
            query GetProject {
                project(id: "${id}") {
                    id
                    tagline
                    title
                }
            }
        `}>
            {({ loading, data }) => !loading ? (
            <table>
                <thead>
                <tr>
                    <th>Tagline</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                    <tr key={data.project.id}>
                    <td>{data.project.tagline}</td>
                    <td>{data.project.title}</td>
                    </tr>
                </tbody>
            </table>
            ) : 'Loading ...'}
        </Query>
    );
};