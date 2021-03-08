import gql from "graphql-tag";

export const updateStockOptionMutation = gql`
  mutation UpdateStockOption($set: SetStockInput!, $where: WhereUniqueInput!) {
    updateStockOption(set: $set, where: $where) {
      id
      stock
    }
  }
`;
