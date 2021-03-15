import { IncomingMessage } from "http";
import cookie from "cookie";
import { GetServerSidePropsContext } from "next";
import { cacheExchange, createClient, dedupExchange, ssrExchange } from "urql";
import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";

const isServerSide = typeof window === "undefined";

const ssrCache = ssrExchange({ isClient: !isServerSide });

const getToken = (req?: IncomingMessage) => {
  const parsedCookie = cookie.parse(req ? req.headers.cookie ?? "" : document.cookie);

  return parsedCookie["qid"];
};

const createUrqlClient = (ctx?: GetServerSidePropsContext) => {
  const token = getToken(ctx?.req);
  return createClient({
    url: "http://localhost:4001/graphql",
    exchanges: [dedupExchange, cacheExchange, ssrCache, multipartFetchExchange],
    fetchOptions: () => {
      return {
        credentials: "include",
        headers: {
          cookie: `qid=${token}`,
        },
      };
    },
  });
};

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
