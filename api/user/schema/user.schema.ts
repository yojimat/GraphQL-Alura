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
  updateUser(updateUserParams: UpdateUserParams!): User!
  deleteUser(id: ID!): ID
  deleteLastUser: ID
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
