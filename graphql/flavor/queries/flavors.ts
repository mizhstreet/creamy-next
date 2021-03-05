import gql from "graphql-tag";
export const flavorsQuery = gql`
  query Flavors {
    flavors {
      id
      name
      image
    }
  }
`;
