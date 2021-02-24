import { gql } from "@apollo/react-hooks";
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
