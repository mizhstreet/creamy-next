import { NextPage } from "next";
import { useUser } from "../../lib/useUser";
import { Loading } from "../loading";
import React from "react";

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
