import { gql } from "@apollo/react-hooks";
export const flavorsQuery = gql`
  query Flavors {
    flavors {
      id
      name
      image
    }
  }
`;
