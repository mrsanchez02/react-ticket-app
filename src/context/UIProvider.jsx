import PropTypes from 'prop-types';
import { useState } from 'react';
import { UIContext } from './UIContext';

export const UIProvider = ({ children }) => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(true);
  
  const showMenu = () => {
    setIsSidebarHidden(false)
  };
  
  const hideMenu = () => {
    setIsSidebarHidden(true)
  };

  return (
    <UIContext.Provider
      value={{
        isSidebarHidden,
        showMenu,
        hideMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

UIProvider.propTypes = {
  children: PropTypes.node.isRequired
};
