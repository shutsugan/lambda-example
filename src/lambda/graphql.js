const { ApolloServer, gql } = require('apollo-server-lambda');

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: (_, __, context) => {
            return 'Hello World!';
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
});

exports.handler = server.createHandler();