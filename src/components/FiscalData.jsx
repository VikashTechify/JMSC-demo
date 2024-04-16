import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  TableContainer,
} from "@chakra-ui/react";
import { fetchFiscalData } from "../redux/fiscaldata/fiscaldataAction";
import Pagination from "./Pagination";
const Post = () => {
  const { data, meta } = useSelector((state) => state.fiscalData?.fiscaldata);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchFiscalData({
        "page[number]": 1,
        "page[size]": 10,
      })
    );
  }, [dispatch]);

  const onPageChange = (page, pageSize) => {
    dispatch(
      fetchFiscalData({
        "page[number]": page,
        "page[size]": pageSize,
      })
    );
  };
  return (
    <Box w="100vw">
      {!data.length ? (
        <h4>No Post Found</h4>
      ) : (
        <>
          <TableContainer>
            <Table size="lg">
              <Thead>
                <Tr>
                  <Th>Program ID</Th>
                  <Th>Record Date</Th>
                  <Th>Fiscal Year</Th>
                  <Th>state</Th>
                  <Th>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((fiscal, index) => (
                  <Tr key={index}>
                    <Td>{fiscal.program_id}</Td>
                    <Td>{fiscal.record_date}</Td>
                    <Td>{fiscal.record_fiscal_year}</Td>
                    <Td>{fiscal.state_nm}</Td>
                    <Td>{fiscal.total_amt}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Pagination
              currentPage={meta.currentPage}
              totalPages={meta["total-pages"]}
              onPageChange={onPageChange}
              currentPageSize={meta.count}
              totalCount={meta["total-count"]}
            />
          </TableContainer>
        </>
      )}
    </Box>
  );
};

export default Post;
