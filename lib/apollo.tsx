import { useMemo } from "react";
import merge from "deepmerge";
import cookie from "cookie";
import type { GetServerSidePropsContext } from "next";
import type { IncomingMessage } from "http";
import type { NormalizedCacheObject } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

interface PageProps {
  props?: Record<string, any>;
}

export const APOLLO_STATE_PROPERTY_NAME = "__APOLLO_STATE__";
export const COOKIES_TOKEN_NAME = "qid";

const getToken = (req?: IncomingMessage) => {
  const parsedCookie = cookie.parse(req ? req.headers.cookie ?? "" : document.cookie);

  return parsedCookie[COOKIES_TOKEN_NAME];
};

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const createApolloClient = (ctx?: GetServerSidePropsContext) => {
  const httpLink = new HttpLink({
    uri: "http://localhost:4001/graphql",
    credentials: "include",
  });

  const authLink = setContext((_, { headers }) => {
    // Get the authentication token from cookies
    const token = getToken(ctx?.req);

    return {
      headers: {
        ...headers,
        cookie: `qid=${token}1`,
      },
    };
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export function initializeApollo(initialState: any = null, ctx: any = null) {
  const client = apolloClient ?? createApolloClient(ctx);

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = client.extract();

    // Merge the existing cache into data passed from
    // getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache);

    // Restore the cache with the merged data
    client.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") {
    return client;
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = client;
  }

  return client;
}

export function addApolloState(client: ApolloClient<NormalizedCacheObject>, pageProps: PageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROPERTY_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: PageProps): ApolloClient<NormalizedCacheObject> {
  const state = pageProps[APOLLO_STATE_PROPERTY_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);

  return store;
}
