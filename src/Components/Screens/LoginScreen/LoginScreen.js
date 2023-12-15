import React, { useEffect } from "react";
import "./_LoginScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../Redux/Actions/authAction";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogIn = () => {
    dispatch(logIn());
  };

  const accessToken = useSelector((state) => state.auth.accessToken);

  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);
  return (
    <div className="login">
      <div className="login__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogIn}>LogIn With Google</button>
        <p>This Project is made using YOUTUBE DATA API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
