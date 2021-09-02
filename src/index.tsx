import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";

import { client } from "graphQL/client";
import { EpsContextProvider } from "context/useContext";

// styles
import GlobalStyles from "styles/global";
import theme from "styles/theme";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <EpsContextProvider>
          <App />
        </EpsContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
