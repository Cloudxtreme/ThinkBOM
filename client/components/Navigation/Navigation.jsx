import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Colors from 'material-ui/lib/styles/colors';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import injectTapEventPlugin from 'react-tap-event-plugin';

const appBarStyle = {
  backgroundColor: Colors.red500,
  marginLeft: 200
};

injectTapEventPlugin();

function home() {
  FlowRouter.go("/");
}

const Navigation = () => (
  <div>
    <AppBar
      title="ThinkBOM"
      showMenuIconButton={false}
      style={appBarStyle}
    />
     <LeftNav
      docked={true}
      width={200}
    >
      <MenuItem onTouchTap={home}>Home</MenuItem>
    </LeftNav>
  </div>
);

export default Navigation;