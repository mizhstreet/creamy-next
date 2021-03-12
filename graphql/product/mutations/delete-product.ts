import gql from "graphql-tag";

export const deleteProductMutation = gql`
  mutation DeleteProduct($where: WhereUniqueInput!) {
    deleteProduct(where: $where) {
      id
    }
  }
`;
