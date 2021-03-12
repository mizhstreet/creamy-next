import gql from "graphql-tag";

export const createProductMutaion = gql`
  mutation CreateProduct($data: CreateProductInput!, $image: Upload!) {
    createProduct(data: $data, image: $image) {
      id
      name
    }
  }
`;
