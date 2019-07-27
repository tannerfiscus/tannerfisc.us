import ApolloClient from 'apollo-boost';

export default new ApolloClient({
  uri: process.env.NODE_ENV === 'production' ? "/graphql" : "http://localhost:4000/graphql",
});