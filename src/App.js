import React, { Component } from "react";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import logo from "./logo.svg"
import "./App.css"

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: '/.netlify/functions/graphql'
});

const client = new ApolloClient({
    cache,
    link
});

const HELLO = gql`
  query Hello { hello }
`;

const LambdaDemo = () => {
  const { data, loading, error } = useQuery(HELLO);

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error {error}</div>
  if (data === 'undefined') return <div>no data found</div>

  return (<div>{data.hello}</div>);
};

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <LambdaDemo />
          </header>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
