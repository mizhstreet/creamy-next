import gql from "graphql-tag";

export const loginMutation = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      id
      name
      image
    }
  }
`;
