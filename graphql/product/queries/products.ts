import { gql } from "@apollo/client";
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
