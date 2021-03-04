import { gql } from "@apollo/client";

export const receiptQuery = gql`
  query Receipt($where: WhereUniqueInput!) {
    receipt(where: $where) {
      id
      cash
      total
      created
      items {
        id
        product {
          id
          name
          image
        }
        price
        quantity
        sizeName
        sizePrice
        optionName
        optionPrice
        flavors
      }
    }
  }
`;
