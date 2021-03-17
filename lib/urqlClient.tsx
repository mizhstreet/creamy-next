import { cacheExchange, createClient, dedupExchange, ssrExchange } from "urql";
import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";

const isServerSide = typeof window === "undefined";

const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
  url:
    process.env.NODE_ENV === "production" ? "https://creamyy.mrmbiuzz.link/graphql" : "http://localhost:4001/graphql",
  exchanges: [dedupExchange, cacheExchange, ssrCache, multipartFetchExchange],
  fetchOptions: () => {
    return {
      credentials: "include",
    };
  },
});

export { client, ssrCache };
