import Profile from "./Profile";
import LogoPage from "./LogoPage";

const ProfileHeader = () => {
  return (
    <div className="flex bg-white items-center justify-between w-full h-fit py-2 px-5 shadow-md">
      {/* Logo */}
      <LogoPage />

      {/* // Profile */}
      <Profile />
    </div>
  );
};

export default ProfileHeader;
