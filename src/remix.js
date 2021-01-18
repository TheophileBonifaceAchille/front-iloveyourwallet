import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme, GlobalStyle } from "@chakra-ui/react";
import { Web3Provider } from "web3-hooks"

const theme = extendTheme({
  colors: {
    brand: {
      1: '#A22522',
      2: '#C33149',
      3: '#C16E70',
      4: '#F7EFEF'
    },
  },

  style: {
    global: {
      "html, body": {
        fontFamily: 'Montserrat, sans-serif',
      },
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={true}>
    <GlobalStyle style={theme} />
    <Web3Provider>
      <App />
    </Web3Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
