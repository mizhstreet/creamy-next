import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from "urql";

const isServerSide = typeof window === "undefined";

const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
  url: "http://localhost:4001/graphql",
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  fetchOptions: () => {
    return {
      credentials: "include",
    };
  },
});

export { client, ssrCache };
