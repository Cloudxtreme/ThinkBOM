import React from 'react';
import {Navigation} from '../Navigation/Navigation.jsx';

const fontStyle = {
  fontFamily: "Roboto"
}

export const Layout = ({content}) => (
  <div style={fontStyle}>
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