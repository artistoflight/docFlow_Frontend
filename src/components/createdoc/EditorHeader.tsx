import LogoPage from "../common/LogoPage";
import Profile from "../common/Profile";
import ShareDoc from "./ShareDoc";

const EditorHeader = () => {
  return (
    <div className="flex items-center justify-between w-full h-full p-4">
      {/* Logo */}
      <LogoPage />
      
      <ShareDoc/>
      {/* // Profile */}
      <Profile />
    </div>
  );
};

export default EditorHeader;
