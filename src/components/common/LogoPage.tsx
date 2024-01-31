import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const LogoPage = () => {
  return (
    <Link to={"/"}>
      <div className="flex items-center">
        <img src={Logo} className="w-8 h-8 md:w-12 md:h-12" alt="Logo" />
      </div>
    </Link>
  );
};

export default LogoPage;
