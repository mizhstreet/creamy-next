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
  fetching: boolean;
}
export default function useUser({
  redirectTo = false,
  redirectIfFound = false,
  shouldExecute = false,
}: IOptions): IAuthResult {
  const [result, getMe] = useMeQuery({
    pause: !shouldExecute,
  });

  const { data, fetching } = result;

  useEffect(() => {
    if (!redirectTo || !data?.me) return undefined;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !data?.me.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && data?.me.isLoggedIn)
    ) {
      if (typeof redirectTo === "string") {
        Router.push(redirectTo);
      }
    }
  }, [data, redirectIfFound, redirectTo]);

  return { user: data?.me, getUser: getMe, fetching };
}
