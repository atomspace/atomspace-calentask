import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Avatar.scss'
import AvatarImg from '../../../../../public/u428.svg';

class Avatar extends Component {
  render() {
    return (
      <div>
        <img src={AvatarImg} style={{width: '100%'}} />
      </div>
    );
  }
}

export default withStyles(s)(Avatar);
