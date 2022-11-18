import {mergeTypeDefs} from '@graphql-tools/merge';
import userDefs from './user/schema/user.schema.js'
import productDefs from './product/schema/product.schema.js'

export default mergeTypeDefs([
    userDefs,
    productDefs
]);
