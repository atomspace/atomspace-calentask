/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import Main from '../Main';
import { gql, ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { graphql, ApolloProvider } from 'react-apollo';
import fetch from 'node-fetch';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3000/graphql', fetch }),
  cache: new InMemoryCache(),
});

class Layout extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Header />
          {this.props.children}
        </div>
      </ApolloProvider>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
