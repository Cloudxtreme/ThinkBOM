import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Colors from 'material-ui/lib/styles/colors';

const NavigationStyles = {
  navigationColor: {
    backgroundColor: Colors.cyan500
  }
};

export const Navigation = () => (
  <AppBar
    title="ThinkBOM"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={NavigationStyles.navigationColor}
  />
);