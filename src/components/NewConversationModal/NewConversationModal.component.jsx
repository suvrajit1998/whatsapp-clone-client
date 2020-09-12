import React, { useState } from "react";

import { Modal, Form, Button } from "react-bootstrap";

import { useContacts } from "../../context/ContactsProvider";
import { useConversations } from "../../context/ConversationProvider";

const NewConversationModal = ({ closeModal }) => {
  const [selectedContactsIds, setSelectedContactsIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    createConversation(selectedContactsIds);
    closeModal();
  };

  const handleCheckboxCheck = (contactId) => {
    setSelectedContactsIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(contactId)) {
        return prevSelectedIds.filter((prevId) => {
          return prevId !== contactId;
        });
      } else {
        return [...prevSelectedIds, contactId];
      }
    });
  };
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactsIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxCheck(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewConversationModal;
