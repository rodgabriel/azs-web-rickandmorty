import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_EPISODES, GET_EPISODE_BY_ID } from "./GraphQL/Queries";

function App() {
  const { error, loading, data } = useQuery(GET_EPISODE_BY_ID(1));
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
