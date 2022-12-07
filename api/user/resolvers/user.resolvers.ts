import { GraphQLScalarType, Kind } from 'graphql';
import { ContextValue } from '../../';
import { AddUserParams, UpdateUserParams } from '../schema/user.schema';

const users = async (_: unknown, __: unknown, { dataSources }: ContextValue) =>
  await dataSources.usersAPI.getUsers();

const user = async (
  _: unknown,
  { id }: { id: number },
  { dataSources }: ContextValue
) => await dataSources.usersAPI.getUser(id);

const firstUser = async (
  _: unknown,
  __: unknown,
  { dataSources }: ContextValue
) => {
  const users = await dataSources.usersAPI.getUsers();
  return users[0];
};

const addUser = async (
  _: unknown,
  { addUserParams }: { addUserParams: AddUserParams },
  { dataSources }: ContextValue
) => await dataSources.usersAPI.addUser(addUserParams);

const updateUser = async (
  _: unknown,
  { updateUserParams }: { updateUserParams: UpdateUserParams },
  { dataSources }: ContextValue
) => await dataSources.usersAPI.updateUser(updateUserParams);

const deleteUser = async (
  _: unknown,
  { id }: { id: number },
  { dataSources }: ContextValue
) => await dataSources.usersAPI.deleteUser(id);

const deleteLastUser = async (
  _: unknown,
  __: unknown,
  { dataSources }: ContextValue
) => {
  const users = await dataSources.usersAPI.getUsers();
  const lastUser = await users.pop();
  if (!lastUser) throw new Error("Last user doesn't exist");
  const id = lastUser.id;
  if (id === undefined) throw new Error('User id was undefined');
  return await dataSources.usersAPI.deleteUser(id);
};

const DateScalar = new GraphQLScalarType({
  name: 'DateTime',
  description: 'Date custom scalar type',
  // Serialize the value that came from the a data source.
  serialize: (value: unknown) => value,
  // When receiving the value from the client, it will be parsed by this function
  parseValue: (value: unknown) => new Date(value as string),
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) return new Date(parseInt(ast.value, 10));
    if (ast.kind === Kind.STRING) return new Date(ast.value);
    // Invalid hard-coded value (not an Interger nor String)
    return null;
  },
});

export default {
  RolesType: {
    ESTUDANTE: 1,
    DOCENTE: 2,
    COORDENACAO: 3,
  },
  Date: DateScalar,
  Query: {
    users,
    user,
    firstUser,
  },
  Mutation: { addUser, updateUser, deleteUser, deleteLastUser },
};
