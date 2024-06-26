import { createContext, useContext, useEffect, useState } from 'react';
import { UseuserContext } from './UserContext';
import { io } from 'socket.io-client';

const socketContext = createContext();

export const UsesocketContext = () => {
    return useContext(socketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [onlineuser, setOnlineuser] = useState([]);
    const [socket, setsocket] = useState(null);
    const { user } = UseuserContext();

    useEffect(() => {
        let newSocket;

        if (user) {
            newSocket = io('http://localhost:3000/', {
                query: {
                    userId: user._id,
                },
            });

            newSocket.on('getOnlineUsers', (users) => {
                setOnlineuser(users);
            });

            setsocket(newSocket);
        } else {
            if (socket) {
                socket.close();
                setsocket(null);
            }
        }

        return () => {
            if (newSocket) {
                newSocket.close();
            }
        };
    }, [user]);

    return (
        <socketContext.Provider value={{ onlineuser, socket }}>
            {children}
        </socketContext.Provider>
    );
};
