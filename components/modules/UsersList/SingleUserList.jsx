import React from "react";
import Router from "next/router";
import Image from "next/image";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Constants
import { ROUTES, IMAGES } from "../../../constants";
// Components
import StyledTableCell from "../../elements/Table/StyledTableCell";
import { StyledTableRow } from "../../elements/Table/StyledTableRow";

const useStyles = makeStyles((theme) => ({
  status: ({ colorText }) => ({
    color: colorText,
    fontWeight: "bold",
  }),
}));

const SingleUserList = ({ id, gender, name, status }) => {
  const showSingleUser = (event, userId) => {
    event.preventDefault();

    Router.push({
      pathname: ROUTES.PROFILE(userId),
    });
  };

  const getGenderImage = (gender) => {
    return gender === "Female" ? IMAGES.FEMALE : IMAGES.MALE;
  };

  const getStatus = (status) => {
    return status === "Active" ? "var(--green)" : "var(--red)";
  };

  const classes = useStyles({ colorText: getStatus(status) });

  return (
    <StyledTableRow onClick={(e) => showSingleUser(e, id)}>
      <StyledTableCell align="center">
        <Image
          src={getGenderImage(gender)}
          alt="Gender symbol"
          width={40}
          height={40}
        />
      </StyledTableCell>
      <StyledTableCell align="center">{name}</StyledTableCell>
      <StyledTableCell align="center" className={classes.status}>
        {status}
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default SingleUserList;
