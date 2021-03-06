import gql from "graphql-tag";
export const optionsQuery = gql`
  query Options {
    options {
      id
      name
      image
      price
      stock
      stockPrice
    }
  }
`;
