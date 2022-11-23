import { RESTDataSource } from '@apollo/datasource-rest';
import { User } from '../schema/user.schema';
import { KeyValueCache } from '@apollo/utils.keyvaluecache/src/KeyValueCache';

const JSON_SERVER_URL = 'http://localhost:3000';

class UsersAPI extends RESTDataSource {
  override baseURL = JSON_SERVER_URL;

  constructor(options: { cache: KeyValueCache }) {
    super(options);
  }

  async getUsers(): Promise<User[]> {
    return this.get('/users');
  }

  async getUser(id: number): Promise<User> {
    return await this.get(`/users/${encodeURIComponent(id)}`);
  }
}

export default UsersAPI;
