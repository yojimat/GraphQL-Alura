import { Product } from '../schema/product.schema';

const products: Product[] = [{ name: 'Product A' }, { name: 'Product B' }];

const productResolvers = {
  Query: {
    products: () => products,
  },
};

export default productResolvers;
