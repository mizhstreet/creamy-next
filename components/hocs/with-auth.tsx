import { NextPage } from "next";
import { useUser } from "../../lib/useUser";
import { Loading } from "../loading";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useMeQuery } from "../../generated/apolloComponent";

export default function withAuth<P>(WrappedComponent: NextPage<P>): NextPage<P> {
  const WithAuthRedirectWrapper: NextPage<P> = (props) => {
    const { user } = useUser({ redirectTo: "/login" });

    if (!user || user.isLoggedIn === false) {
      return <Loading open />;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthRedirectWrapper;
}
