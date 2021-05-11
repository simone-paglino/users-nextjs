import React, { useState, useEffect, useRef, memo } from "react";
// Constants
import { APIS } from "../../../constants";
// Components
import UsersPage from "./UsersPage";

const Users = memo(({ getData, error }) => {
  const nameSearchRef = useRef(null);

  const [pagCountState, setPagCountState] = useState(1);
  const [usersState, setUsersState] = useState();

  const handleAPIRequest = async (url) => {
    return await getData(url);
  };

  const handleAPIResponse = async (apiRequest) => {
    const data = await apiRequest;

    if (!error) {
      setUsersState(data);
      return true;
    } else {
      return false;
    }
  };

  const fetchPagination = async (pagNum = 1) => {
    if (pagNum >= 0) {
      const result = await handleAPIResponse(
        handleAPIRequest(APIS.USERS_PAG(pagNum))
      );
      if (result) {
        setPagCountState(pagNum);
      }
    }
  };

  const fetchByName = async () => {
    const name = nameSearchRef?.current?.value;

    if (name && typeof name === "string" && name.length > 0) {
      await handleAPIResponse(handleAPIRequest(APIS.USERS_NAME(name)));
    } else {
      fetchPagination();
    }
  };

  const prevPagination = () => fetchPagination(pagCountState - 1);
  const nextPagination = () => fetchPagination(pagCountState + 1);

  useEffect(() => {
    fetchPagination();
  }, []);

  return (
    <UsersPage
      listUsers={usersState}
      nameSearchRef={nameSearchRef}
      prevFunc={prevPagination}
      nextFunc={nextPagination}
      countPagin={pagCountState}
      fetchByName={fetchByName}
    />
  );
});

export default Users;
