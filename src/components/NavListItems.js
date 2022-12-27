import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";

function NavListItems() {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        padding: "8px",
        fontSize: "14px",
        lineHeight: "21px",
        margin: "1rem",
        marginLeft: "auto",
        width: "100%",
      }}
    >
      <button
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "40px",
          boxSizing: "border-box",
          padding: "10px 12px",
          fontWeight: 600,
          background: "rgb(242, 242, 242)",
          borderRadius: "8px",
          transition: "background 250ms ease 0s",
          cursor: "pointer",
        }}
      >
        <span>Search for Help</span>
        <RiSearchLine />
      </button>

      <div>
        <ul style={{ listStyle: "none" }}>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 12px",
              cursor: "pointer",
            }}
          >
            <div>Sync with Slack</div>{" "}
            <div>
              <AiOutlineArrowRight />
            </div>
          </li>

          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 12px",
              cursor: "pointer",
            }}
          >
            <div>Step by step tutorial for Admins</div>{" "}
            <div>
              <AiOutlineArrowRight />
            </div>
          </li>

          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 12px",
              cursor: "pointer",
            }}
          >
            <div>Sync with Calendar</div>{" "}
            <div>
              <AiOutlineArrowRight />
            </div>
          </li>

          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 12px",
              cursor: "pointer",
            }}
          >
            <div>Delete a user</div>{" "}
            <div>
              <AiOutlineArrowRight />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavListItems;
