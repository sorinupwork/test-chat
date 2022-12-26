import React from "react";
import { Widget, addResponseMessage, addLinkSnippet } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

import logo from "./logo.svg";
import coffee from "./coffee.png";
import "./App.css";

let messages = [];

function App() {
  const handleNewUserMessage = (newMessage) => {
    if (newMessage.toLowerCase() === "hello") {
      addResponseMessage(" **HELLO** ");
    } else if (newMessage.toLowerCase() === "test") {
      addLinkSnippet({
        title: "Created by",
        link: "https://sorin-adam.netlify.com/",
        target: "_blank",
      });
    } else {
      addResponseMessage("Welcome to this **awesome** chat!");
    }

    console.log(`New message incoming! ${newMessage}`);

    // Now send the message throught the backend API
    messages.push(newMessage);
    console.log(messages);
  };

  const subtitle = (
    <p className="subtitleText">
      How can we help?
      <p className="subText">We tipically reply in under 3 minutes.</p>
    </p>
  );

  return (
    <div>
      <div>
        <h1>Custom messages</h1>
        <p>hello</p>
        <p>test</p>
      </div>

      <Widget
        titleAvatar={coffee}
        title="Hi there 👋"
        subtitle={subtitle}
        emojis={true}
        senderPlaceHolder="Send us a message"
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
      />
    </div>
  );
}

export default App;
