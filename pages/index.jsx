import React, { memo } from "react";
// Components
import UsersPageController from "../components/templates/UsersPage/UsersPageController";

const Users = memo(({ getData, error }) => {
  return <UsersPageController {...{ getData, error }} />;
});

export default Users;
