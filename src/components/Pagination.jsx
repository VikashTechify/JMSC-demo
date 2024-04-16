import PropTypes from "prop-types";

import { Box, Text, Select, Flex, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  currentPageSize,
  totalCount,
}) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1, currentPageSize);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1, currentPageSize);
    }
  };

  const handlePageSizeChange = (e) => {
    onPageChange(currentPage, e.target.value);
  };
  const pageSizeOptions = [10, 20, 50, 100];
  const from = (currentPage - 1) * currentPageSize + 1;
  const to = currentPage * currentPageSize;
  const paginationText = `${from} - ${to} of ${totalCount}`;
  console.log("currentPage", {
    currentPage,
    totalPages,
    onPageChange,
    currentPageSize,
    totalCount,
  });
  return (
    <>
      <Box
        px="0.5rem"
        mt="auto"
        display="flex"
        alignItems="center"
        bg="white"
        borderTop="1px solid"
        borderTopColor="gray.200"
        height="3rem"
      >
        <>
          <Flex ml="auto" alignItems="center" mr={5}>
            <Text fontSize="sm" mr={2}>
              Rows Per Page
            </Text>
            <Select
              size="sm"
              value={currentPageSize}
              onChange={handlePageSizeChange}
              width="auto"
              mr={5}
            >
              {pageSizeOptions?.map((page) => (
                <option key={page} value={page}>
                  {page}
                </option>
              ))}
            </Select>
            <Text fontSize="sm" mx={2}>
              {paginationText}
            </Text>
          </Flex>
          <Flex gap={2}>
            <IconButton
              size="sm"
              variant="ghost"
              icon={<ChevronLeftIcon fontSize="xl" />}
              aria-label="Previous Page"
              isDisabled={currentPage === 0}
              onClick={handlePrevPage}
            />
            <IconButton
              size="sm"
              variant="ghost"
              icon={<ChevronRightIcon fontSize="xl" />}
              aria-label="Next Page"
              isDisabled={currentPage === totalPages - 1}
              onClick={handleNextPage}
            />
          </Flex>
        </>
      </Box>
    </>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
  currentPageSize: PropTypes.number,
  totalCount: PropTypes.number,
};
export default Pagination;
