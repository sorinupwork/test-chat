import React from "react";
import { messages, robotMessages } from "../App";

const Messages = () => {
  return (
    <div
      style={{
        border: "1px solid gold",
        borderRadius: "25px",
        padding: "10px",
        width: "100%",
      }}
    >
      <h1>Messages History: </h1>
      <ul
        style={{
          listStyle: "none",
          gap: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((message, index) => (
          <li key={index} style={{ color: "blue" }}>
            You: {message}
          </li>
        ))}
        {robotMessages.map((response, i) => (
          <li key={i} style={{ color: "green" }}>
            Robot: {messages.includes("hello") ? response[0] : response[1]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
