import React from 'react';
import s from './Hour.css';
import StaticBlock from '../StaticBlock/StaticBlock';

const Hour = props => (
  <div className={s.Hour}>
    <div>{props.hour}</div>
  </div>
);

export default Hour;
