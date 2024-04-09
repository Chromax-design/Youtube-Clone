import { Link } from "react-router-dom";
import LogoImg from "../../assets/icons/logo.svg";

export const Logo = () => {
  return (
    <div className="flex gap-3 items-center">
      <Link to={"/"}>
        <img src={LogoImg} alt="" className="" />
      </Link>
    </div>
  );
};
