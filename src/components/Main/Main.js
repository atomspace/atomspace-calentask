import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Main.css';
import Link from '../Link';
import WeekHeader from '../WeekHeader/WeekHeader';
import TimeFrame from '../TimeFrame/TimeFrame';

class Main extends React.Component {
  render() {
    return (
      <div className={s.mainblock}>
        <WeekHeader />
        <TimeFrame />
      </div>
    );
  }
}

export default withStyles(s)(Main);
