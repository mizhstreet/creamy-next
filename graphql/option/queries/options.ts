import { gql } from "@apollo/client";
export const optionsQuery = gql`
  query Options {
    options {
      id
      name
      image
      price
      stock
    }
  }
`;
