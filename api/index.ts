import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';
import { makeExecutableSchema } from '@graphql-tools/schema';
import UsersAPI from './user/data/user.js';

export interface ContextValue {
  dataSources: {
    usersAPI: UsersAPI;
  };
}

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer<ContextValue>({
  schema,
  csrfPrevention: true,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express ap
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    const { cache } = server;
    return {
      // We create new instances of our data sources with each request,
      // passing in our server's cache.
      dataSources: {
        usersAPI: new UsersAPI({ cache }),
      },
    };
  },
});

console.log(`🚀 Server ready at ${url}`);
