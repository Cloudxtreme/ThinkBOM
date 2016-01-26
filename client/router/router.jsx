import React from 'react';
import {mount} from 'react-mounter';
import Layout from '../components/Layout/Layout.jsx';
import Home from '../components/Home/Home.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
        content: (<Home />)
    });
  }
});