const products = [{ name: "Product A" }, { name: "Product B" }];

const productResolvers = {
  Query: {
    products: () => products,
  },
};

module.exports = productResolvers;
