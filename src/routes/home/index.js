/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-boost';
import fetch from 'node-fetch';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:3000/graphql', fetch}),
  cache: new InMemoryCache()
});

async function action({ fetch }) {
  return {
    title: 'React Starter Kit',
    chunks: ['home'],
    component: (
      <ApolloProvider client={client} >
        <div>
          <Home />
        </div>
      </ApolloProvider>
    ),
  };
}

export default action;
