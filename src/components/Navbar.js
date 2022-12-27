import React from "react";
import NavListItems from "./NavListItems";
import { renderCustomComponent } from "react-chat-widget";
import Messages from "./Messages";
import Help from "./Help";
import { AiOutlineHome } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdHelpCircle } from "react-icons/io";

import "../App.css";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
      <button
        className="button"
        onClick={() => renderCustomComponent(NavListItems)}
      >
        {" "}
        <div>
          <AiOutlineHome />
        </div>{" "}
        <span>Home</span>
      </button>
      <button
        className="button"
        onClick={() => renderCustomComponent(Messages)}
      >
        {" "}
        <div>
          <FiMessageSquare />
        </div>{" "}
        <span>Messages</span>
      </button>
      <button className="button" onClick={() => renderCustomComponent(Help)}>
        {" "}
        <div>
          <IoMdHelpCircle />
        </div>{" "}
        <span>Help</span>
      </button>
    </div>
  );
};

export default Navbar;

const styles = {
  button: {},
};
