# GraphQL Alura
This repository was created to learn along with the course of GraphQL at [Alura](https://www.alura.com.br/).  

## How to use  
At the root directory use ``npx json-server --nc --watch mock-data/dados.json`` to get a data server where you can get data from.  
And `npm start` to start the nodemon server that starts the GraphQL server.

## Tools
- [GraphQL Tools](https://www.graphql-tools.com/)

## JSON Server Endpoints  
Depending of your firewall rules, you need to put your real ip instead of localhost.  

- http://localhost:3000/users
- http://localhost:3000/roles

## Examples
### Requests
- `curl --request POST --header 'content-type: application/json' --url http://10.93.83.102:4000 --data '{"query": "query <opt_query_name> { users { name }}"}'`
- `curl --request POST --header 'content-type: application/json' --url http://10.93.83.102:4000 --data '{"query": "query {__schema { types { name kind fields { name }}}}"}'`

## Ideas of Refactoring
- Create a env file for env variables.  