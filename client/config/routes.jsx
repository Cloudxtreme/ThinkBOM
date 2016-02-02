import React from 'react';
import {mount} from 'react-mounter';
import Layout from '../components/Layout/Layout.jsx';
import Home from '../components/Home/Home.jsx';
import BOMItem from '../containers/bomItemContainer';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
        content: (<Home />)
    });
  }
});

FlowRouter.route("/BOMItem", {
  action() {
    mount(Layout, {
        content: (<BOMItem />)
    });
  }
});