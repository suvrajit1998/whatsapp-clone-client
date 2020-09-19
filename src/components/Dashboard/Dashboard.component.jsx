import React from "react";
import SideBar from "../SideBar/SideBar.component";

import { Route } from "react-router-dom";

import OpenConversation from "../OpenConversation/OpenConversation.component";

import { useConversations } from "../../context/ConversationProvider";

const Dashboard = ({ id }) => {
  const { selectedConversation } = useConversations();
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Route exact path="/sidebar">
        <SideBar id={id} />
      </Route>
      {selectedConversation && (
        <Route path="/conversation" exact component={OpenConversation} />
      )}
    </div>
  );
};

export default Dashboard;
