import React from 'react';
import Navigation from '../Navigation/Navigation.jsx';

const Layout = ({content}) => (
  <div>
    <header>
      <Navigation />
    </header>

    <main>
      {content}
    </main>
  </div>
);

export default Layout;