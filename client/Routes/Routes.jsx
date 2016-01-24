import React from 'react';
import {mount} from 'react-mounter';
import {Layout} from '../components/Layout/Layout.jsx';
import {Home} from '../views/AllUsers/Home.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
        content: (<Home />)
    });
  }
});