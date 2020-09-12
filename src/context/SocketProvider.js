import React, { useContext, createContext, useState, useEffect } from "react";

import io from "socket.io-client";

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ id, children }) => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io("https://whatsapp-clones-server.herokuapp.com/", {
      query: { id },
    });
    setSocket(newSocket);

    return () => newSocket.close();
  }, [id]);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
