const userDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
# This "User" type defines the queryable fields for every user in our data source.
type User {
  name: String!
  active: Boolean!
  email: String
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each.
type Query {
  users: [User]
  firstUser: User
}
`
export default userDefs