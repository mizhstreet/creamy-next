import { gql } from "@apollo/client";
export const flavorsQuery = gql`
  query Flavors {
    flavors {
      id
      name
      image
    }
  }
`;
