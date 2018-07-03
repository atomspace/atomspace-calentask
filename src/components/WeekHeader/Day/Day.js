import React from 'react';
import s from './Day.css';

const Day = props => (
  <div className={s.Day}>
    <div className={s.DayOfWeek}>{props.dayOfWeek}</div>
    <div className={s.DayOfMonth}>{props.dayOfMonth}</div>
  </div>
);

export default Day;
