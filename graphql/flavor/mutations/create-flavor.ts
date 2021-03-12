import gql from "graphql-tag";

export const createFlavorMutation = gql`
  mutation CreateFlavor($image: Upload!, $data: CreateFlavorInput!) {
    createFlavor(data: $data, image: $image) {
      id
      name
    }
  }
`;
