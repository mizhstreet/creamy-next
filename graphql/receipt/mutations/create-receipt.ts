import gql from "graphql-tag";

export const createReceiptMutation = gql`
  mutation CreateReceipt($data: CreateReceiptInput!) {
    createReceipt(data: $data) {
      id
      total
      cash
    }
  }
`;
