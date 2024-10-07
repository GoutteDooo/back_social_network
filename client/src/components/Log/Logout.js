import axios from "axios";
import React from "react";
import cookie from "js-cookie";

const Logout = () => {
  const removeCookie = (key) => {
    if (window !== "undefined") {
      //sécurité importante,(s'il se passe qlq chose dans la fenêtre)
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}api/user/logout`, {
        withCredentials: true,
      })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log("error logout : " + err));

    window.location = "/";
  };

  return (
    <li onClick={logout}>
      <img src="./img/icons/logout.svg" alt="logout" />
    </li>
  );
};

export default Logout;
