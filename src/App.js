import React from "react";
import Login from "./components/Login/Login.component";

import useLocalStorage from "./hoooks/useLocalStorage";
import Dashboard from "./components/Dashboard/Dashboard.component";

import { ContactsProvider } from "./context/ContactsProvider";
import { ConversationsProvider } from "./context/ConversationProvider";
import { SocketProvider } from "./context/SocketProvider";

function App() {
  const [id, setId] = useLocalStorage("id");
  const dashBoard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );
  return id ? dashBoard : <Login onIdSubmit={setId} />;
}

export default App;
