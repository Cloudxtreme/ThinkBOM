import React from 'react';
import {Navigation} from '../Navigation/Navigation.jsx';

export const Layout = ({content}) => (
  <div>
    <header>
      <Navigation />
    </header>
    
    <main>
      {content}
    </main>
    
    <footer>
      <p>Footer</p>
    </footer>
  </div>
);