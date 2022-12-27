import React from "react";
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  renderCustomComponent,
} from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

import logo from "./logo.svg";
import coffee from "./coffee.png";
import "./App.css";
import Navbar from "./components/Navbar";

export let messages = [];
let response = ["**HELLO**", "Welcome to this **awesome** chat!"];
export let robotMessages = [];

function App() {
  const handleNewUserMessage = (newMessage) => {
    if (newMessage.toLowerCase() === "hello") {
      addResponseMessage(response[0]);
    } else if (newMessage.toLowerCase() === "test") {
      addLinkSnippet({
        title: "Created by",
        link: "https://sorin-adam.netlify.com/",
        target: "_blank",
      });
    } else {
      addResponseMessage(response[1]);
    }

    console.log(`New message incoming! ${newMessage}`);

    // Now send the message throught the backend API
    messages.push(newMessage);
    robotMessages.push(response);
    console.log(messages);
    console.log(robotMessages);
  };

  const subtitle = (
    <div className="subtitleText">
      How can we help?
      <p className="subText">We tipically reply in under 3 minutes.</p>
      <Navbar />
    </div>
  );

  return (
    <div className="App">
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
