import React, { useContext, createContext } from "react";

import useLocalStorage from "../hoooks/useLocalStorage";

const ContactsContext = createContext();

export const useContacts = () => useContext(ContactsContext);

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  const createContact = (id, name) => {
    setContacts((prevContacts) => [...prevContacts, { id, name }]);
  };

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
};
