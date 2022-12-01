# GraphQL Alura
This repository was created to learn along with the course of GraphQL at [Alura](https://www.alura.com.br/).  

## How to use  
At the root directory use ``npx json-server --nc --watch mock-data/data.json`` to get a data server where you can get data from.  
And `npm start` to start the nodemon server that starts the GraphQL server.

## Tools
- [GraphQL Tools](https://www.graphql-tools.com/)

## JSON Server Endpoints  
Depending of your firewall rules, you need to put your real ip instead of localhost.  

- http://localhost:3000/users
- http://localhost:3000/roles

## Examples
### Requests
#### Querys
- `curl --request POST --header 'content-type: application/json' --url http://localhost:4000 --data '{"query": "query <opt_query_name> { users { name }}"}'`
- `curl --request POST --header 'content-type: application/json' --url http://localhost:4000 --data '{"query": "query {__schema { types { name kind fields { name }}}}"}'`

#### Mutations  
```bash
curl --request POST \
--header 'content-type: application/json' \
--url http://localhost:4000/ \
--data '{"query":"mutation AddUser($user: AddUserParams!) {\r\n  addUser(user: $user) {\r\n    active\r\n    role {\r\n      id\r\n      type\r\n    }\r\n    name\r\n  }\r\n}","variables":{"user":{"active":false,"name":"test","role":3}}}'
```  
## Ideas of Refactoring
- Create a env file for env variables.  