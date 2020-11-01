import { createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import { withUrqlClient } from 'next-urql';

const isServerSide = typeof window === `undefined`;

export default createClient({
  url: `/api/graphql`,
  exchanges: [
    dedupExchange,
    cacheExchange({}),
    ssrExchange({
      isClient: !isServerSide,
      initialState: !isServerSide ? window.__URQL_DATA__ : null,
    }),
    fetchExchange,
  ],
});
