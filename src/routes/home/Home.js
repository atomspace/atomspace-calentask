/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Main from '../../components/Main/Main';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import moment from 'moment';

const MessageQuery = gql`
  {
    messages(room: "Cherry") {
      text
      time
      id
    }
  }
`;

class Home extends Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  displayMessages() {
    const data = this.props.data;
    if (data.loading) {
      return <div>Loading...</div>;
    }
    return data.messages.map(message => (
      <li key={message.id}>{moment(message.time).format('HH:mm:ss')}</li>
    ));
  }

  render() {
    const { data } = this.props;
    const messages = data.messages || [];
    const msgTexts = messages.map(message => message.text);
    console.log(msgTexts);

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div>
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(MessageQuery)(withStyles(s)(Home));
