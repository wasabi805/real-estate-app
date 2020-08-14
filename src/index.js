import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';
import theme from "./style/theme";
import { ThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
         <ThemeProvider theme={ theme }>
             <App />
         </ThemeProvider>
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);
