"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
scalar JSON

type Configo {
  _id: JSON!
  appName: String!
  config: JSON!
}

type Query {
  configo(id: String): [Configo]
}

type Mutation {
  updateConfig (
    id: String!
    config: JSON!
  ): Configo
  
  deleteConfig (
    id: String!
  ): Configo
  
  createConfig (
  appName: String!
    config: JSON
  ): Configo
}

# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: Query
  mutation: Mutation
}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZGF0YS9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FtQ2QsQ0FBQyJ9