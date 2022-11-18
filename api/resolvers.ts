import {mergeResolvers} from '@graphql-tools/merge';
import userResolvers from './user/resolvers/user.resolvers.js'
import productResolvers from './product/resolvers/product.resolvers.js'

export default mergeResolvers([
  userResolvers,
  productResolvers
]);
