import gql from "graphql-tag";

export const usersQuery = gql`
  query Users {
    users {
      id
      name
      image
      isAdmin
    }
  }
`;
