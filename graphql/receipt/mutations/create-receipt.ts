import { gql } from "@apollo/client";

export const createReceiptMutation = gql`
  mutation CreateReceipt($data: CreateReceiptInput!) {
    createReceipt(data: $data) {
      id
      total
      cash
    }
  }
`;
