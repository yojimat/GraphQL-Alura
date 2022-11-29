const userDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
# This "User" type defines the queryable fields for every user in our data source.
type User {
  name: String!
  active: Boolean!
  role: Role!
  id: ID!
  email: String
}

type Role {
  id: ID!
  type: String!
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each.
type Query {
  users: [User]
  firstUser: User
  user(id: ID!): User!
}

input AddUserParams {
  name: String!
  active: Boolean!
  role: Int!
}

type Mutation {
  addUser(user: AddUserParams!): User!
}
`;

export interface Role {
  id: number;
  type: string;
}

export interface User {
  name: string;
  active: boolean;
  email?: string;
  id?: number;
  role: Role | number;
}

export type AddUserParams = {
  name: string;
  active: boolean;
  role: number;
};

export default userDefs;
