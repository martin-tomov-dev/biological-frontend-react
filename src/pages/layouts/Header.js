import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  let history = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") === "") {
      console.log(1);
      history("/login");
    }
  }, localStorage.getItem("user"));

  return (
    <div className="flex items-center bg-slate-50 p-4 fixed w-full">
      <div className="w-1/5 flex">
        <img
          className="w-24 "
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
          alt="logo"
        />
        <h4 className="text-xl flex items-center md:font-serif text-lime-900">
          EKOGEA Biological Monitoring
        </h4>
      </div>
      <div>
        <h4 className="md:font-serif text-lime-900 pl-5">
          User: {localStorage.getItem("user")}
        </h4>
      </div>
    </div>
  );
};

export default Header;
