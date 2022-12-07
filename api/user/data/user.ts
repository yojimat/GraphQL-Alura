import { RESTDataSource } from '@apollo/datasource-rest';
import {
  AddUserParams,
  Role,
  UpdateUserParams,
  User,
} from '../schema/user.schema';
import { KeyValueCache } from '@apollo/utils.keyvaluecache/src/KeyValueCache';

const JSON_SERVER_URL = 'http://localhost:3000';

class UsersAPI extends RESTDataSource {
  override baseURL = JSON_SERVER_URL;

  constructor(options: { cache: KeyValueCache }) {
    super(options);
  }

  async getUsers(): Promise<Promise<User>[]> {
    const users = await this.get<User[]>('/users');
    return users.map(
      async (u) =>
        ({
          ...u,
          role: await this.get<Role>(`/roles/${u.role}`),
        } as User)
    );
  }

  async getUser(id: number): Promise<User> {
    const user = await this.get<User>(`/users/${encodeURIComponent(id)}`);
    user.role = await this.get<Role>(`/roles/${user.role}`);
    return user;
  }

  async addUser(addUserParams: AddUserParams): Promise<User> {
    const role = await this.get<Role>(
      `/roles/${encodeURIComponent(addUserParams.role)}`
    );

    const newUser: User = {
      name: addUserParams.name,
      active: addUserParams.active,
      role: role.id,
      createdAt: new Date(),
    };
    const user = await this.post<User>('/users', { body: newUser });
    return {
      ...user,
      role: { ...role },
    };
  }

  async updateUser(updateUserParams: UpdateUserParams) {
    const { id } = updateUserParams;
    const role = await this.get<Role>(
      `/roles/${encodeURIComponent(updateUserParams.role)}`
    );
    const updatedUser: User = {
      name: updateUserParams.name,
      active: updateUserParams.active,
      role: role.id,
      email: updateUserParams.email,
    };
    const user = await this.patch<User>(`/users/${id}`, {
      body: { ...updatedUser },
    });
    return {
      ...user,
      role: { ...role },
    };
  }

  async deleteUser(id: number) {
    await this.delete(`/users/${encodeURIComponent(id)}`);
    return id;
  }
}

export default UsersAPI;
