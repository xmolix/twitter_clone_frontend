import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";

// TODO:
// 1. Finish whomRead (Layout / Server / Store)
// 2. Fix notification

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
              <Provider store={store}>
                <App />
              </Provider>
          </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);