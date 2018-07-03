import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './WeekHeader.css';
import Day from './Day/Day';
import moment from 'moment';

const week = [
  {
    dayOfWeek: 'Mon',
    dayOfMonth: 1,
  },
  {
    dayOfWeek: 'Tue',
    dayOfMonth: 2,
  },
  {
    dayOfWeek: 'Wed',
    dayOfMonth: 3,
  },
  {
    dayOfWeek: 'Thu',
    dayOfMonth: 4,
  },
  {
    dayOfWeek: 'Fri',
    dayOfMonth: 5,
  },
  {
    dayOfWeek: 'Sat',
    dayOfMonth: 6,
  },
  {
    dayOfWeek: 'Sun',
    dayOfMonth: 7,
  },
];

class WeekHeader extends React.Component {
  render() {
    return (
      <div className={s.WeekHeader}>
        {week.map(day => (
          <Day
            key={day.dayOfMonth}
            className={s.day}
            dayOfWeek={day.dayOfWeek}
            dayOfMonth={day.dayOfMonth}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(s)(WeekHeader);
