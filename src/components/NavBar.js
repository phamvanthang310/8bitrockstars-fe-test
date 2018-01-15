import React from 'react';
import { AppBar, IconButton } from 'material-ui';
import { NavigationClose } from 'material-ui/svg-icons/index';

const NavBar = () => {
  return (
    <AppBar
      title="8BitRockstars"
      showMenuIconButton={false}
      iconElementLeft={<IconButton><NavigationClose/></IconButton>}
    />
  );
};

export default NavBar;
