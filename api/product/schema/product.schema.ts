const productDefs = `#graphql
type Product {
  name: String!
}

type Query {
  products: [Product]
}
`;

export interface Product {
  name: string;
}

export default productDefs;
