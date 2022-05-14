import React from 'react';
import ReactDOM from 'react-dom/client';
import TopBar from './component/TopBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './static/css/style.css';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <TopBar />
    </ThemeProvider>
  </React.StrictMode>
);
