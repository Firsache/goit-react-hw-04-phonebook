import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
// import { ThemeProvider } from 'styled-components';
// import {theme} from './styles/theme.jsx'
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <ThemeProvider theme={theme}>
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // </ThemeProvider>
);
