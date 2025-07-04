const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');

async function start() {
  const app = express();
  app.use(cors());

  const typeDefs = gql`
    type Creator {
      id: ID!
      name: String!
      niche: String!
    }

    type Query {
      hello: String
      creators: [Creator!]!
    }
  `;

  const creators = [
    { id: '1', name: 'Alice Influencer', niche: 'Tech' },
    { id: '2', name: 'Bob Creator', niche: 'Lifestyle' }
  ];

  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      creators: () => creators
    }
  };

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  );
}

start();
