import gql from "graphql-tag";

export const receiptsQuery = gql`
  query Receipts($skip: Int, $take: Int) {
    receipts(skip: $skip, take: $take) {
      id
      cash
      total
      created
      user {
        image
        name
      }
    }
  }
`;
