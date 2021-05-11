import React, { memo } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
// Components
import SingleUserList from "./SingleUserList";
import StyledTableCell from "../../elements/Table/StyledTableCell";
import { StyledTableRowHead } from "../../elements/Table/StyledTableRow";

const useStyles = makeStyles({
  center: {
    textAlign: "center",
  },
  table: {
    width: "1000px",
    margin: "auto",
  },
});

const UsersList = memo(({ listUsers }) => {
  const classes = useStyles();

  const showUsersList = (users) => {
    return users.map((user, index) => <SingleUserList key={index} {...user} />);
  };

  if (listUsers && Array.isArray(listUsers) && listUsers.length > 0) {
    return (
      <Table className={classes.table} aria-label="users table">
        <TableHead>
          <StyledTableRowHead>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </StyledTableRowHead>
        </TableHead>
        <TableBody>{showUsersList(listUsers)}</TableBody>
      </Table>
    );
  }
  return <h3 className={classes.center}>No data available</h3>;
});

export default UsersList;
