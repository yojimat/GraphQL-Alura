const userDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
# This "User" type defines the queryable fields for every user in our data source.
scalar Date

type User {
  name: String!
  active: Boolean!
  role: Role!
  id: ID!
  email: String
  createdAt: Date
}

type Role {
  id: ID!
  type: String!
}

enum RolesType {
  ESTUDANTE
  DOCENTE
  COORDENACAO
}

# An example of union, it does not makes sense
union SearchResult = User | Role

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each.
type Query {
  searchUsersRoles(roleSearchString: String!): [SearchResult!]
  users: [User]
  firstUser: User
  user(id: ID!): User!
}

# This schema could be refactored to be like the UpdateUserParams.
# Using the an unique input for both of them and excluding the ID.
input AddUserParams {
  name: String!
  active: Boolean!
  role: RolesType!
}

input UpdateUserParams {
  id: ID!
  name: String
  active: Boolean
  role: RolesType
  email: String
}

type Mutation {
  addUser(addUserParams: AddUserParams!): User!
  updateUser(updateUserParams: UpdateUserParams!): updateUserResponse!
  deleteUser(id: ID!): deleteUserResponse!
  deleteLastUser: deleteUserResponse!
}

interface response {
  # Abstract Type
  code: Int!
  message: String!
}

# Examples of the uses of an interface 
type deleteUserResponse implements response {
  code: Int!
  message: String!
}

type updateUserResponse implements response {
  code: Int!
  message: String!
  user: User!
}
`;

export interface Role {
  id: number;
  type: string;
}

export enum RolesType {
  ESTUDANTE = 1,
  DOCENTE,
  COORDENACAO,
}

export interface User {
  name: string;
  active: boolean;
  email?: string;
  id?: number;
  role: Role | number;
  createdAt?: Date;
}

export type AddUserParams = {
  name: string;
  active: boolean;
  role: RolesType;
  email?: string;
};

export type UpdateUserParams = {
  id: number;
  name: string;
  active: boolean;
  role: RolesType;
  email: string;
};

export default userDefs;
