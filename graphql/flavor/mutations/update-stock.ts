import gql from "graphql-tag";

export const updateStockFlavorMutation = gql`
  mutation UpdateStockFlavor($set: SetStockInput!, $where: WhereUniqueInput!) {
    updateStockFlavor(set: $set, where: $where) {
      id
      stock
    }
  }
`;
