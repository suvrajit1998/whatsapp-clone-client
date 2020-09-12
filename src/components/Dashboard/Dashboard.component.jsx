import React from "react";
import SideBar from "../SideBar/SideBar.component";

import OpenConversation from "../OpenConversation/OpenConversation.component";

import { useConversations } from "../../context/ConversationProvider";

const Dashboard = ({ id }) => {
  const { selectedConversation } = useConversations();
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <SideBar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
};

export default Dashboard;
