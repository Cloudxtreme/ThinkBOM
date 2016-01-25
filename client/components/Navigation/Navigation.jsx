import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Colors from 'material-ui/lib/styles/colors';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import injectTapEventPlugin from 'react-tap-event-plugin';

const NavigationStyles = {
  backgroundColor: Colors.red500,
  marginLeft: 200
};

injectTapEventPlugin();

function home() {
  FlowRouter.go("/");
}

function test() {
  FlowRouter.go("/test");
}

export const Navigation = () => (
  <div>
    <AppBar
      title="ThinkBOM"
      showMenuIconButton={false}
      style={NavigationStyles}
    />
     <LeftNav
      docked={true}
      width={200}
    >
      <MenuItem onTouchTap={home}>Home</MenuItem>
      <MenuItem onTouchTap={test}>Test</MenuItem>
    </LeftNav>
  </div>
);