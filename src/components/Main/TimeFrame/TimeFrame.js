import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TimeFrame.css';
import Hour from './Hour/Hour';

const hours = [...Array(24).keys()].map(
  hour => (hour < 10 ? `0${hour}:00` : `${hour}:00`),
);

class TimeFrame extends React.Component {
  render() {
    return (
      <div className={s.TimeFrame}>
        {hours.map(time => <Hour key={time} hour={time} className={s.hour} />)}
      </div>
    );
  }
}

export default withStyles(s)(TimeFrame);
