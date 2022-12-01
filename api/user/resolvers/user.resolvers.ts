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

export default {
  Query: {
    users,
    user,
    firstUser,
  },
  Mutation: { addUser, updateUser, deleteUser },
};
