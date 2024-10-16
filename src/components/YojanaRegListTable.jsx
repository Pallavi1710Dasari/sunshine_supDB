import React, { useEffect, useMemo, useState } from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import { useQuery } from "react-query";
import { getRegistrationsAPI } from "../services/yojanaListApis";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  CircularProgress,
  Typography,
  Box,
} from "@mui/material";
 
export const YojanaRegListTable = () => {
    const navigate=useNavigate();
  const { data, isLoading, isError, error } = useQuery(
    "registrations",
    getRegistrationsAPI
  );
 
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
 
  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);
 
  const columns = useMemo(
    () => [
      {
        Header: "Action",
        Cell: ({ row }) =>
          row.original.confirm ? (
            <Button
              variant="contained"
              color="error"
              size="small"
              sx={{ width: "100px" }}
              onClick={() => navigate('/editAndPay')}
            >
              Edit & Pay
            </Button>
          ) : (
            <a href="/downloadPdf" target="_blank" variant="body2" color="textSecondary">
              Download Slip
            </a>
          ),
      },
      { Header: "Register ID", accessor: "registerId" },
      { Header: "Aadhaar No.", accessor: "adhaarNo" },
      { Header: "Applicant Name", accessor: "applicantName" },
      { Header: "Father Name", accessor: "fatherName" },
      { Header: "Mobile", accessor: "mobile" },
      { Header: "Tmx-ID", accessor: "trnxId" },
      {
        Header: "Confirm",
        accessor: "confirm",
        Cell: ({ value }) => (value ? "Yes" : "No"),
      },
      { Header: "Fee", accessor: "fee" },
      { Header: "Entry Date", accessor: "entryDate" },
      { Header: "State", accessor: "state" },
      { Header: "City", accessor: "city" },
      { Header: "Gram", accessor: "gram" },
      { Header: "Post", accessor: "post" },
      { Header: "Thana", accessor: "thana" },
      { Header: "Tahsheel", accessor: "tehsil" },
      { Header: "Supervisor", accessor: "supervisorId" },
      { Header: "Yojna Name", accessor: "yojanaName" },
    ],
    []
  );
 
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
    setPageSize,
  } = useTable(
    {
      columns,
      data: filteredData,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useSortBy,
    usePagination
  );
 
  if (isLoading) {
    return <CircularProgress />;
  }
 
  if (isError) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }
 
  const executeSearch = () => {
    if (searchInput.trim() === "") {
      setShowSearch(false);
      setFilteredData(data);
      return;
    }
 
    const lowercasedFilter = searchInput.toLowerCase();
    const filtered = data.filter((item) =>
      Object.keys(item).some((key) => {
        const value = item[key];
        return (
          value != null &&
          value.toString().toLowerCase().includes(lowercasedFilter)
        );
      })
    );
    setFilteredData(filtered);
  };
 
  const clearSearch = () => {
    setSearchInput("");
    setFilteredData(data);
  };
 
  return (
    <Box >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: '25px' }} variant="h4">Yojana Registration List</Typography>
        </Box>
    <Box sx={{ width: "100%" , }}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        {!showSearch && (
          <Button
            sx={{ margin: 1, backgroundColor: "#4b86b3", color: "#fff" }}
            onClick={() => setShowSearch(true)}
          >
            <SearchIcon />
          </Button>
        )}
        {showSearch && (
          <Box
            sx={{
              width: "30%",
              display: "flex",
              alignItems: "center",
              transition: "transform 0.8s ease-in-out",
              border: "1px solid #bfbfbf",
              margin: 1,
              borderRadius: "5px",
            }}
          >
            <Button color="none" size="small" onClick={executeSearch}>
              <SearchIcon />
            </Button>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
              }}
            />
            <Button onClick={clearSearch} size="small">
              <ClearIcon />
            </Button>
          </Box>
        )}
      </Box>
      <Box sx={{ overflow: "auto" }}>
        <Table
          {...getTableProps()}
          sx={{ borderCollapse: "collapse", width: "100%" }}
        >
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    sx={{
                      border: "1px solid #ccc",
                      backgroundColor: "#4b86b3",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#b5c9e8",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <TableCell
                      {...cell.getCellProps()}
                      sx={{
                        border: "1px solid #ccc",
                        backgroundColor: index % 2 === 0 ? "#e6e9fa" : "#fff",
                        "&:hover": {
                          backgroundColor: "#b5c9e8",
                          cursor: "pointer",
                        },
                      }}
                    >
                      {cell.render("Cell")}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <div className="pagination">
        <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </Button>
        <Button onClick={previousPage} disabled={!canPreviousPage}>
          {"<"}
        </Button>
        <Button onClick={nextPage} disabled={!canNextPage}>
          {">"}
        </Button>
        <Button
          onClick={() => gotoPage(pageOptions.length - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </Button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <TablePagination
          component="div"
          count={filteredData.length}
          page={pageIndex}
          onPageChange={(event, newPage) => gotoPage(newPage)}
          rowsPerPage={pageSize}
          onRowsPerPageChange={(e) => setPageSize(Number(e.target.value))}
        />
      </div>
    </Box>
    </Box>
  );
};
 
 
 