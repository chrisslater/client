import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

// import { Hello } from "./modules/welcome/components/Hello";
import { UserContainer } from './modules/welcome/components/User';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/graphql/',
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <UserContainer />
  </ApolloProvider>,
  document.getElementById('example')
);
