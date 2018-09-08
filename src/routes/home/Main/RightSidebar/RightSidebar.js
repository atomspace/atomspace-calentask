import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RightSidebar.css';

class RightSidebar extends React.Component {
  render() {
    return (
      <div className={s.RightSidebar}></div>
    );
  }
}

export default withStyles(s)(RightSidebar);
