const productDefs = `#graphql
type Product {
  name: String!
}

type Query {
  products: [Product]
}
`

export default productDefs;