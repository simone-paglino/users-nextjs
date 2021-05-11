import React from "react";
import Link from "next/link";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Constants
import { ROUTES } from "../../../constants";
// Components
import HeadMeta from "../../elements/HeadMeta/HeadMeta";

const useStyles = makeStyles((theme) => ({
  center: {
    textAlign: "center",
  },
  top: {
    marginTop: "50px",
  },
  list: {
    display: "inline-block",
    textAlign: "left",
    listStyle: "none",
  },
  listItem: {
    margin: "1rem 0",
    fontSize: "20px",
  },
  bold: {
    fontWeight: 700,
    fontSize: "20px",
  },
  link: {
    display: "block",
  },
}));

const UserProfile = ({ userData }) => {
  const classes = useStyles();

  const getUserProfile = (userProfile) => {
    const info = Object.entries(userProfile).map(([key, value]) => (
      <li key={key} className={classes.listItem}>
        <bold className={classes.bold}>{key}</bold>: {value}
      </li>
    ));
    return <ul className={classes.list}>{info}</ul>;
  };

  return (
    <>
      <HeadMeta
        title={`${userData?.name} profile`}
        description={`This is ${userData?.name}'s profile`}
        email={userData?.email}
      />
      <div className={`${classes.center} ${classes.top}`}>
        <h1>{userData?.name} profile</h1>
        {userData ? getUserProfile(userData) : null}
        <Link href={ROUTES.HOME}>
          <a className={`${classes.link} ${classes.top}`}>Back to Home</a>
        </Link>
      </div>
    </>
  );
};

export default UserProfile;
