import { ContextValue } from '../../';
import { AddUserParams, User } from '../schema/user.schema';

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
  { name, active, role }: AddUserParams,
  { dataSources }: ContextValue
) => await dataSources.usersAPI.addUser({ name, active, role });

export default {
  Query: {
    users,
    user,
    firstUser,
  },
  Mutation: { addUser },
};
