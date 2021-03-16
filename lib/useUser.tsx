import { useEffect } from "react";
import { Auth, useMeQuery } from "../generated/apolloComponent";
import Router from "next/router";
import { OperationContext } from "urql";

interface IOptions {
  redirectTo?: boolean | string;
  redirectIfFound?: boolean;
  shouldExecute?: boolean;
}

interface IAuthResult {
  user: Auth | undefined;
  getUser: (opts?: Partial<OperationContext> | undefined) => void;
}
export function useUser({ redirectTo = false, redirectIfFound = false }: IOptions): IAuthResult {
  const [result, getMe] = useMeQuery();

  const { data, error, fetching } = result;

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (!redirectTo || fetching) return undefined;

    if ((redirectTo && !redirectIfFound && !data?.me.isLoggedIn) || (redirectIfFound && data?.me.isLoggedIn)) {
      if (typeof redirectTo === "string") {
        Router.push(redirectTo);
      }
    }
  }, [data?.me, redirectIfFound, redirectTo, fetching]);

  return { user: data?.me, getUser: getMe };
}
