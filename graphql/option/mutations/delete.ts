import gql from "graphql-tag";

export const deleteOptionMutation = gql`
  mutation DeleteOption($where: WhereUniqueInput!) {
    deleteOption(where: $where) {
      id
    }
  }
`;
