import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Colors from 'material-ui/lib/styles/colors';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleLeftnav() {
    this.setState({
      open: !this.state.open
    });
  }

  homeRoute() {
    this.setState({
      open: false
    });

    FlowRouter.go("/");
  }

  bomItemRoute() {
    this.setState({
      open: false
    });

    FlowRouter.go("/BOMItem");
  }

  render() {
    const styles = {
      appbarStyle: {
        backgroundColor: Colors.red500
      }
    };

    return (
      <div>
        <AppBar
          title="ThinkBOM"
          style={styles.appbarStyle}
          onLeftIconButtonTouchTap={this.toggleLeftnav.bind(this)}
        />
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.homeRoute.bind(this)}>HOME</MenuItem>
          <MenuItem onTouchTap={this.bomItemRoute.bind(this)}>BOM ITEM</MenuItem>
        </LeftNav>
      </div>
    );
  }
}