import gql from "graphql-tag";
export const productsQuery = gql`
  query Products {
    products {
      id
      name
      image
      basePrice
      totalFlavor
      sizes {
        id
        name
        price
      }
    }
  }
`;
