// lib/graphql/client.js

import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.GRAPHQL_API_URL || 'http://localhost:3001/graphql';

const graphQLClient = new GraphQLClient(endpoint);

export default graphQLClient;
