import React from 'react';
import Navigation from '../Navigation/Navigation.jsx';

const Layout = ({content}) => (
  <div>
    <header>
      <Navigation />
    </header>

    <main className="container-fluid">
      {content}
    </main>
  </div>
);

export default Layout;