const { gql, ApolloServer } = require("apollo-server");

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

  type Query {
    users: [User]
  }
`;

const resolvers = {
  Query: {
    users: () => users,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
