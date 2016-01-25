import React from 'react';
import {mount} from 'react-mounter';
import {Layout} from '../components/Layout/Layout.jsx';
import {Home} from '../views/AllUsers/Home.jsx';
import {Test} from '../views/AllUsers/Test.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
        content: (<Home />)
    });
  }
});

FlowRouter.route("/test", {
  action() {
    mount(Layout, {
        content: (<Test />)
    });
  }
});