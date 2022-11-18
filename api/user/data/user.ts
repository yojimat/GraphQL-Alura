import {RESTDataSource} from '@apollo/datasource-rest';

class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000';
  }

  async getUser() {
    return this.get('/users');
  }
}

export default UsersApi;
