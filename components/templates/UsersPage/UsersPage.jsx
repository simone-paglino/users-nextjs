import React, { memo } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
// Components
import HeadMeta from "../../elements/HeadMeta/HeadMeta";
import Button from "../../elements/Button/Button";
import Input from "../../elements/Input/Input";
import UsersList from "../../modules/UsersList/UsersList";

const useStyles = makeStyles((theme) => ({
  elementsTopTable: {
    "& > *": {
      margin: "30px 10px",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Users = memo(
  ({
    listUsers,
    nameSearchRef,
    prevFunc,
    nextFunc,
    countPagin,
    fetchByName,
  }) => {
    const classes = useStyles();

    const getNavigationButtons = () => (
      <div className={classes.elementsTopTable}>
        <Button
          text="Previous Users"
          onClick={prevFunc}
          disabled={countPagin < 2}
        />
        <Button text="Next Users" onClick={nextFunc} />
      </div>
    );

    return (
      <>
        <HeadMeta
          title="Visualize users"
          description="Getting users from API call (by pagination or name)"
        />
        <div>
          <Typography variant="h3">Users table</Typography>
          <div className={classes.elementsTopTable}>
            <Input
              inputRef={nameSearchRef}
              label="Name to search"
              placeholder="Insert name to search..."
            />
            <Button text="Search" onClick={fetchByName} />
          </div>
          {getNavigationButtons()}
          <UsersList listUsers={listUsers} />
          {getNavigationButtons()}
        </div>
      </>
    );
  }
);

export default Users;
