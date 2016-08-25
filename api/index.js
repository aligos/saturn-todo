import apiServer from 'saturn-framework/api';

import { apolloServer } from 'apollo-server';

import schema from './schema';

apiServer.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema,
}));

apiServer.start();