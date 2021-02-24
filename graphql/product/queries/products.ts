import { gql } from "@apollo/react-hooks";
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
