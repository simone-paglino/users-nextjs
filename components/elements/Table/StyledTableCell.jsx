// Material UI
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.white,
  },
  body: {
    fontSize: "1rem",
  },
}))(TableCell);

export default StyledTableCell;
