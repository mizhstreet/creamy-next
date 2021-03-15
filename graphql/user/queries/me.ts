import gql from "graphql-tag";

export const meQuery = gql`
  query Me {
    me {
      id
      isLoggedIn
      name
      image
      isAdmin
    }
  }
`;
