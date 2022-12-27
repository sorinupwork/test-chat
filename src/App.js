import React from "react";
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  setQuickButtons,
} from "react-chat-widget";

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

  setQuickButtons([
    { label: "Messages", value: "messages" },
    { label: "Home", value: "home" },
    { label: "Help", value: "help" },
  ]);

  const subtitle = (
    <div className="subtitleText">
      How can we help?
      <p className="subText">We tipically reply in under 3 minutes.</p>
    </div>
  );

  return (
    <div className="App">
      <div>
        <h1 className="text-3xl text-center">Custom messages</h1>
        <p className="text-center">hello</p>
        <p className="text-center">test</p>
        <h2 className="text-1xl text-center text-gray-500">
          I saved user's messages into an array, you can view it into google
          console.log{" "}
        </h2>
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
