import PropTypes from 'prop-types';
import { createContext } from 'react';
import { useSocket } from '../hooks/useSocket'

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {

  const { socket, online } = useSocket(import.meta.env.VITE_SOCKET_SERVER);
  
  return (
    <SocketContext.Provider value={{ socket, online }}>
      { children }
    </SocketContext.Provider>
  )
}

SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
