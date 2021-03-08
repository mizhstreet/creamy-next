import gql from "graphql-tag";

export const deleteFlavorMutation = gql`
  mutation DeleteFlavor($where: WhereUniqueInput!) {
    deleteFlavor(where: $where) {
      id
    }
  }
`;
