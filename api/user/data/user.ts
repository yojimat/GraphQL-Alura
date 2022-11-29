import { RESTDataSource } from '@apollo/datasource-rest';
import { AddUserParams, Role, User } from '../schema/user.schema';
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

  async addUser(userParams: AddUserParams): Promise<User> {
    const role = await this.get<Role>(
      `/roles/${encodeURIComponent(userParams.role)}`
    );

    const newUser: User = {
      name: userParams.name,
      active: userParams.active,
      role: role.id,
    };
    const user = await this.post<User>('/users', { body: newUser });
    return {
      ...user,
      role: { ...role },
    };
  }
}

export default UsersAPI;
