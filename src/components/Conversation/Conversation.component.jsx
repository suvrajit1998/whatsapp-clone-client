import React from "react";

import { ListGroup } from "react-bootstrap";

import { Link } from "react-router-dom";

import { useConversations } from "../../context/ConversationProvider";

const Conversation = () => {
  const { conversations, selectConversationIndex } = useConversations();
  return (
    <ListGroup as={Link} to="/conversation">
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          active={conversation.selected}
          onClick={() => selectConversationIndex(index)}
        >
          {conversation.recipients.map((r) => r.name).join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Conversation;
