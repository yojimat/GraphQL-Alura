# GraphQL Alura
This repository was created to learn along with the course of GraphQL at [Alura](https://www.alura.com.br/).  

## How to use  
At the root directory use ``npx json-server --watch api/data/dados.json`` to get a data server where you can get data from.  
And `npm start` to start the nodemon server that starts the GraphQL server.

## Tools
- [GraphQL Tools](https://www.graphql-tools.com/)

## Endpoints  
- http://localhost:3000/users
- http://localhost:3000/roles

## Examples
### Requests
- `curl --request POST --header 'content-type: application/json' --url http://10.93.83.102:4000 --data '{"query": "query <opt_query_name> { users { name }}"}'`
- `curl --request POST --header 'content-type: application/json' --url http://10.93.83.102:4000 --data '{"query": "query {__schema { types { name kind fields { name }}}}"}'`

## Ideas of Refactoring
- Change the strutucture of folders, putting all the resolvers and schemas together. Lessening the depth of sub folders.