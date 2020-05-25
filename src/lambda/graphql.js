import { ApolloServer, gql } from 'apollo-server-lambda';

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

const handler = server.createHandler();

export {handler};