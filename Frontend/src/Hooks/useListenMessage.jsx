import { useEffect } from 'react';
import { UsemessageContext } from '../context/MessageContext';
import { UsesocketContext } from '../context/SocketContext';

export default function useListenMessage() {
    const { socket } = UsesocketContext();
    const { converstation, setconverstation } = UsemessageContext();

    useEffect(() => {
        if (socket) {
            const handleNewMessage = (newMessage) => {
                setconverstation((prevConverstation) => [...prevConverstation, newMessage]);
            };

            socket.on('newMessage', handleNewMessage);

            return () => {
                socket.off('newMessage', handleNewMessage);
            };
        }
    }, [socket, setconverstation]);

    return null;
}
