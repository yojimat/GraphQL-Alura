const { ApolloService, gql } = require("apollo-server");

const users = [
  { name: "Ana", active: true },
  { name: "Marcia", active: false },
];

const typeDefs = gql`
  type User {
    name: String!
    active: Boolean!
    email: String
  }
`;

const server = new ApolloService({ typeDefs, resolvers });
