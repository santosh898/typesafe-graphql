module.exports = {
  client: {
    service: {
      name: "my-graphql-app",
      url: "http://localhost:8080/graphql",
    },
    excludes: ["**/src/queries/typedQueries.ts"],
  },
};
