import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Calendar.scss';

const day = [
  {
    dayOfWeek: 'Monday',
    day: 1,
  },
  {
    dayOfWeek: 'Tuesday',
    day: 2,
  },
  {
    dayOfWeek: 'Wednesday',
    day: 3,
  },
  {
    dayOfWeek: 'Thursday',
    day: 4,
  },
  {
    dayOfWeek: 'Friday',
    day: 5,
  },
  {
    dayOfWeek: 'Saturday',
    day: 6,
  },
  {
    dayOfWeek: 'Sunday',
    day: 7,
  },
];

class Calendar extends Component {
  displayTime() {
    const arr = [];

    for (let i = 0; i < 34; i++) {
      arr.push(
        <div key={i} className={s.flex}>
          <div className={s.boxtime}>00:00</div>
          <div className={`${s.box} ${s.wide}`} />
        </div>,
      );
    }
    return arr;
  }

  render() {
    return (
      <div className={s.Calendar}>
        <div className={`${s.flex} ${s.con_box__hor} ${s.abs}`}>
          <div className={`${s.marginLeft}`}>
            <div className={s.box} style={{ border: 0, marginLeft: '13%' }}>
              333
            </div>
            <div />
          </div>
          <div className={s.flex_col}>
            <div className={s.box}>Понедельник</div>
            <div className={s.box}>Вторник</div>
            <div className={s.box}>Среда</div>
            <div className={s.box}>Четверг</div>
            <div className={s.box}>Пятница</div>
            <div className={s.box}>Суббота</div>
            <div className={s.box}>Воскресенье</div>
          </div>
        </div>

        <div>
          <div className={`${s.abs_div} ${s.colMonday}`} />
          <div className={`${s.abs_div} ${s.colTuesday}`} />
          <div className={`${s.abs_div} ${s.colWednesday}`} />
          <div className={`${s.abs_div} ${s.colThursday}`} />
          <div className={`${s.abs_div} ${s.colFriday}`} />
          <div className={`${s.abs_div} ${s.colSaturday}`} />
          <div className={`${s.abs_div} ${s.colSunday}`} />
        </div>

        <div className={`${s.con_box__vert} ${s.padd}`}>
          {this.displayTime()}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Calendar);
