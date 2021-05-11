// Material UI
import { withStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";

export const StyledTableRowHead = withStyles((theme) => ({
  root: {
    background: "var(--primary-color)",
  },
}))(TableRow);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    transition: ".1s linear",

    "&:hover": {
      cursor: "pointer",
      background: "#a9c8ff",
      transition: ".1s linear",
    },
  },
}))(TableRow);
