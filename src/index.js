import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS
    theme={{
      globalStyles: () => ({
        'html, body': {
          margin: 0,
          padding: 0,
          backgroundColor: '#36393F',
        },
      }),
    }}
  >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
