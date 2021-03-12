import gql from "graphql-tag";

export const createOptionMutation = gql`
  mutation CreateOption($data: CreateOptionInput!, $image: Upload!) {
    createOption(data: $data, image: $image) {
      id
      name
    }
  }
`;
