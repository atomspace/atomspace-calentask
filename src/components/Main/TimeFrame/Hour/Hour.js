import React from 'react';
import s from './Hour.css';

const Hour = props => (
  <div className={s.Hour}>
    <div>{props.hour}</div>
  </div>
);

export default Hour;
