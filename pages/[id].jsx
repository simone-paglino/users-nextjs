// Components
import UserProfileController from "../components/templates/UserProfile/UserProfileController";

const UserPage = ({ getData, error }) => {
  return <UserProfileController {...{ getData, error }} />;
};

export default UserPage;
