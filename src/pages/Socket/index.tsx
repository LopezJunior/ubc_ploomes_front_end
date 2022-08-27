import React, { useEffect, useState } from "react";
import * as uuid from "uuid";

import io from "socket.io-client";
import { Container, Content, Card, MyMessage, OtherMessage } from "./style";

interface Message {
  id: string;
  name: string;
  text: string;
  teste: string;
}

interface Payload {
  name: string;
  text: string;
  teste: string;
}

const socket = io("http://localhost:3333");

const TesteSocket: React.FC = () => {
  const [title] = useState("Chat Web");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [teste, setTeste] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    function receivedMessage(message: Payload) {
      const newMessage: Message = {
        id: uuid.v4(),
        name: message.name,
        text: message.text,
        teste: "Hello World",
      };

      setMessages([...messages, newMessage]);
    }

    socket.on("msgToClient", (message: Payload) => {
      receivedMessage(message);
    });
  }, [messages, name, text, teste]);

  function validateInput() {
    return name.length > 0 && text.length > 0;
  }

  function sendMessage() {
    if (validateInput()) {
      const message: Payload = {
        name,
        text,
        teste,
      };

      socket.emit("msgToServer", message);
      setText("");
    }
  }

  return (
    <Container>
      <Content>
        <h1>{title}</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name..."
        />
        <Card>
          <ul>
            {messages.map((message) => {
              if (message.name === name) {
                return (
                  <MyMessage key={message.id}>
                    <span>
                      {message.name}
                      {" diz:"}
                    </span>
                    <p>{message.text}</p>
                    {/* <p>{message.teste}</p> */}
                  </MyMessage>
                );
              }

              return (
                <OtherMessage key={message.id}>
                  <span>
                    {message.name}
                    {" diz:"}
                  </span>

                  <p>{message.text}</p>
                </OtherMessage>
              );
            })}
          </ul>
        </Card>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter message..."
        />
        <button type="button" onClick={() => sendMessage()}>
          Send
        </button>
      </Content>
    </Container>
  );
};

export default TesteSocket;
