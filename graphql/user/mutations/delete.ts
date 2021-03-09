import gql from "graphql-tag";

export const deleteUserMutation = gql`
  mutation DeleteUser($where: WhereUniqueInput!) {
    deleteUser(where: $where) {
      id
    }
  }
`;
