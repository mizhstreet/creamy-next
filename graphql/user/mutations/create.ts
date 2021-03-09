import gql from "graphql-tag";

export const createUserMutation = gql`
  mutation CreateUser($data: CreateUserInput!, $image: Upload!) {
    createUser(data: $data, image: $image) {
      id
      name
      image
    }
  }
`;
