import { IncomingMessage } from "http";
import cookie from "cookie";
import { GetServerSidePropsContext } from "next";
import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from "urql";

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
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
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
  url: "http://localhost:4001/graphql",
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  fetchOptions: () => {
    return {
      credentials: "include",
      headers: {
        cookie: `qid=s%3ATBZxprx82YnlApfF74gf1x-_9xqFHIE-.nGoqrarzk5%2FZZy5GxrzioL5RrpFzP6XdEqOn9lY8Hgg`,
      },
    };
  },
});

export { client, ssrCache };
