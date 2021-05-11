import React, { useState, useEffect } from "react";
// Constants
import { APIS } from "../../../constants";
// Components
import UserProfile from "./UserProfile";

const UserProfileController = ({ getData, error }) => {
  const [userState, setUserState] = useState();

  const loadUserProfile = async () => {
    const pathname = window.location.pathname;
    const id = /[\d]+$/g.exec(pathname);

    return await getData(APIS.USER(id[0]));
  };

  const initProfile = async () => {
    const data = await loadUserProfile();
    if (!error) {
      setUserState(data);
    }
  };

  useEffect(() => {
    initProfile();
  }, []);

  return <UserProfile userData={userState} />;
};

export default UserProfileController;
