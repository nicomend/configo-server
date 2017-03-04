export default `
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