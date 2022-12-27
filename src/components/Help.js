import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";

const Help = () => {
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
      <div style={{ backgroundColor: "#FEFAF6" }}>
        <h1 style={{ textAlign: "center", margin: 10 }}>Help</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            position: "relative",
          }}
        >
          <RiSearchLine
            style={{
              marginRight: "20px",
              marginTop: "2px",
              position: "absolute",
              top: 5,
              right: 10,
            }}
          />
          <input
            type="text"
            placeholder={`Search for help`}
            style={{
              width: "250px",
              margin: "auto",
              marginBottom: "10px",
              height: "20px",
            }}
          />
        </div>
      </div>

      <div>
        <p style={{ textAlign: "center", borderBottom: "1px solid gray" }}>
          {" "}
          4 Collections
        </p>
        <ul style={{ listStyle: "none", margin: 0 }}>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 12px",
              cursor: "pointer",
            }}
          >
            <div style={{ fontWeight: "bold" }}>
              <p style={{ margin: 0 }}>Onboarding guide</p>
              <p style={{ fontWeight: "normal", fontSize: "12px", margin: 0 }}>
                Find out how Cafe works 👋
              </p>
            </div>
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
            <div style={{ fontWeight: "bold" }}>
              <p style={{ margin: 0 }}>Admin guide</p>
              <p style={{ fontWeight: "normal", fontSize: "12px", margin: 0 }}>
                All the info to master Cafe 💪
              </p>
            </div>
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
            <div style={{ fontWeight: "bold" }}>
              <p style={{ margin: 0 }}>SSO, HRIS, SCIM</p>
              <p style={{ fontWeight: "normal", fontSize: "12px", margin: 0 }}>
                Discover all the options 🪩
              </p>
            </div>
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
            <div style={{ fontWeight: "bold" }}>
              <p style={{ margin: 0 }}>Account & Billing</p>
              <p style={{ fontWeight: "normal", fontSize: "12px", margin: 0 }}>
                All the info you need about 💸
              </p>
            </div>
            <div>
              <AiOutlineArrowRight />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Help;
