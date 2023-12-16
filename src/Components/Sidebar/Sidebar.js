import React from "react";
import "./_Sidebar.scss";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { LogOut } from "../../Redux/Actions/authAction";

const Sidebar = ({ toggleSidebar, handleToggleSideBar }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(LogOut());
  };
  return (
    <nav
      className={toggleSidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSideBar(false)}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscription</span>
      </li>
      <li>
        <MdThumbUp size={23} />
        <span>Liked Video</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I don't Know</span>
        <hr></hr>
      </li>
      <li onClick={handleLogOut}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
    </nav>
  );
};

export default Sidebar;
