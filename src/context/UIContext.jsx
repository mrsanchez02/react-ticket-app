import {createContext, useState} from 'react'

export const UIContext = createContext({
  isSidebarOpen: false,
  showMenu: () => {},
  hideMenu: () => {}
});

import PropTypes from 'prop-types';

export const UIProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showMenu = () => setIsSidebarOpen(true);

  const hideMenu = () => setIsSidebarOpen(false);

  return (
    <UIContext.Provider
      value={{
        isSidebarOpen,
        showMenu,
        hideMenu
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

UIProvider.propTypes = {
  children: PropTypes.node.isRequired
};
