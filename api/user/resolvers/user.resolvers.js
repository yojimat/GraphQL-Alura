const users = [
  { name: "Ana", active: true },
  { name: "Marcia", active: false },
];

const userResolvers = {
  Query: {
    users: () => users,
    firstUser: () => users[0]
  },
};

module.exports = userResolvers;
