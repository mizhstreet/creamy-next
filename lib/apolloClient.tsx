import { useMemo } from "react";
// import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/react-hooks";
import { NormalizedCacheObject } from "apollo-cache-inmemory";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient(ctx: any) {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: "http://192.168.0.14:4001/graphql", // Server URL (must be absolute)
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
      headers: {
        cookie: ctx?.req?.headers?.cookie,
      },
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: any = null, ctx: any): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient(ctx);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: unknown, ctx: any): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState, ctx), [initialState]);
  return store;
}
