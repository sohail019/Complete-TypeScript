// src/components/UserTable.tsx

import React, { useState } from "react";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import "react-resizable/css/styles.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Collapse,
  TablePagination,
  Paper,
} from "@mui/material";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface User {
  id: string;
  username: string;
  email: string;
  role: "Admin" | "Regular User";
  age: number;
  phone: string;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [openRow, setOpenRow] = useState<{ [key: string]: boolean }>({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [columnsWidth, setColumnsWidth] = useState({
    id: 100,
    username: 150,
    email: 200,
    role: 150,
    moreInfo: 100
  })

  //? Handle Column Resizing

  const handleResize = (column: keyof typeof columnsWidth) => (
    event: React.SyntheticEvent, 
    {size} : ResizeCallbackData
  ) => {
    setColumnsWidth((prevWidths) => ({
      ...prevWidths, [column]: size.width
    }))
  }

  //? Handle pagination

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Toggle collapse view for rows
  const handleRowToggle = (id: string) => {
    setOpenRow((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Slice users for pagination
  const paginatedUsers = users.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper className=" rounded-xl border-2 border-darkBlue dark:border-light-background">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{width: columnsWidth.id }}>
                <ResizableBox
                  width={columnsWidth.id}
                  height={40}
                  axis="x"
                  resizeHandles={["e"]}
                  onResize={handleResize("id")}
                  minConstraints={[50, 40]}
                  maxConstraints={[300, 40]}
                >
                  <div style={{ width: columnsWidth.id }}>ID</div>
                </ResizableBox>
              </TableCell>
              <TableCell sx={{ width: columnsWidth.username }}>
                <ResizableBox
                  width={columnsWidth.username}
                  height={40}
                  axis="x"
                  resizeHandles={["e"]}
                  onResize={handleResize("username")}
                  minConstraints={[50, 40]}
                  maxConstraints={[300, 40]}
                >
                  <div style={{ width: columnsWidth.username }}>Username</div>
                </ResizableBox>
              </TableCell>
              <TableCell sx={{ width: columnsWidth.email }}>
                <ResizableBox
                  width={columnsWidth.email}
                  height={40}
                  axis="x"
                  resizeHandles={["e"]}
                  onResize={handleResize("email")}
                  minConstraints={[50, 40]}
                  maxConstraints={[300, 40]}
                >
                  <div style={{ width: columnsWidth.email }}>Email</div>
                </ResizableBox>
              </TableCell>
              <TableCell sx={{ width: columnsWidth.role }}>
                <ResizableBox
                  width={columnsWidth.role}
                  height={40}
                  axis="x"
                  resizeHandles={["e"]}
                  onResize={handleResize("role")}
                  minConstraints={[50, 40]}
                  maxConstraints={[300, 40]}
                >
                  <div style={{ width: columnsWidth.role }}>Role</div>
                </ResizableBox>
              </TableCell>
              <TableCell sx={{ width: columnsWidth.moreInfo }}>
                <ResizableBox
                  width={columnsWidth.moreInfo}
                  height={40}
                  axis="x"
                  resizeHandles={["e"]}
                  onResize={handleResize("moreInfo")}
                  minConstraints={[50, 40]}
                  maxConstraints={[300, 40]}
                >
                  <div style={{ width: columnsWidth.id }}>More Info</div>
                </ResizableBox>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers.map((user) => (
              <React.Fragment key={user.id}>
                <TableRow>
                  <TableCell sx={{ width: columnsWidth.id  }}>
                    {user.id}
                  </TableCell>
                  <TableCell sx={{ width: columnsWidth.username  }}>
                    {user.username}
                  </TableCell>
                  <TableCell sx={{ width: columnsWidth.email  }}>
                    {user.email}
                  </TableCell>
                  <TableCell sx={{ width: columnsWidth.role  }}>
                    {user.role}
                  </TableCell>
                  <TableCell>Get Info
                    <IconButton onClick={() => handleRowToggle(user.id)}>
                      {openRow[user.id] ? (
                        <IoMdArrowDropup />
                      ) : (
                        <IoMdArrowDropdown />
                      )}
                    </IconButton>
                  </TableCell>
                </TableRow>

                {/* Collapsible Row */}
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                  >
                    <Collapse
                      in={openRow[user.id]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <div className="bg-gray-100 p-4">
                        <p>
                          <strong>Age:</strong> {user.age}
                        </p>
                        <p>
                          <strong>Phone:</strong> {user.phone}
                        </p>
                      </div>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={users.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default UserTable;
