import { Box, CircularProgress } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";
import { useTotalReceiptQuery } from "../../../generated/apolloComponent";

interface IProps {
  page: number;
  handlePageChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const Paginate: React.FC<IProps> = ({ page, handlePageChange }) => {
  const [result] = useTotalReceiptQuery();

  const { data, fetching, error } = result;

  if (fetching) {
    return <CircularProgress />;
  }

  if (error) {
    console.warn(error);
  }
  console.log(data);
  return (
    <Box width={1} display="flex" justifyContent="center" mt={4}>
      <Pagination
        page={page}
        onChange={handlePageChange}
        count={data?.totalReceipt ? Math.ceil(data?.totalReceipt / 10) : 1}
        color="primary"
      />
    </Box>
  );
};

export { Paginate };
