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
        {/* <div class={s.calendar}>
      <div class={s.calendar__header} className={s.day}>
        <div>mon</div>
        <div>tue</div>
        <div>wed</div>
        <div>thu</div>
        <div>fri</div>
        <div>sat</div>
        <div>sun</div>
      </div>
      <div className={s.calendar__week}>
        <div className={s.calendar__day} className={s.day}>1</div>
        <div className={s.calendar__day} className={s.day}>2</div>
        <div className={s.calendar__day} className={s.day}>3</div>
        <div className={s.calendar__day} className={s.day}>4</div>
        <div className={s.calendar__day} className={s.day}>5</div>
        <div className={s.calendar__day} className={s.day}>6</div>
        <div className={s.calendar__day} className={s.day}>7</div>
      </div>
      <div className={s.calendar__week}>
        <div className={s.calendar__day} className={s.day}>8</div>
        <div className={s.calendar__day} className={s.day}>9</div>
        <div className={s.calendar__day} className={s.day}>10</div>
        <div className={s.calendar__day} className={s.day}>11</div>
        <div className={s.calendar__day} className={s.day}>12</div>
        <div className={s.calendar__day} className={s.day}>13</div>
        <div className={s.calendar__day} className={s.day}>14</div>
      </div>
      <div className={s.calendar__week}>
        <div className={s.calendar__day} className={s.day}>15</div>
        <div className={s.calendar__day} className={s.day}>16</div>
        <div className={s.calendar__day} className={s.day}>17</div>
        <div className={s.calendar__day} className={s.day}>18</div>
        <div className={s.calendar__day} className={s.day}>19</div>
        <div className={s.calendar__day} className={s.day}>20</div>
        <div className={s.calendar__day} className={s.day}>21</div>
      </div>
      <div className={s.calendar__week}>
        <div className={s.calendar__day} className={s.day}>22</div>
        <div className={s.calendar__day} className={s.day}>23</div>
        <div className={s.calendar__day} className={s.day}>24</div>
        <div className={s.calendar__day} className={s.day}>25</div>
        <div className={s.calendar__day} className={s.day}>26</div>
        <div className={s.calendar__day} className={s.day}>27</div>
        <div className={s.calendar__day} className={s.day}>28</div>
      </div>
      <div className={s.calendar__week}>
        <div className={s.calendar__day} className={s.day}>29</div>
        <div className={s.calendar__day} className={s.day}>30</div>
        <div className={s.calendar__day} className={s.day}>31</div>
        <div className={s.calendar__day} className={s.day}>1</div>
        <div className={s.calendar__day} className={s.day}>2</div>
        <div className={s.calendar__day} className={s.day}>3</div>
        <div className={s.calendar__day} className={s.day}>4</div>
      </div>
    </div> */}
        <WeekHeader />
        <TimeFrame />
      </div>
    );
  }
}

export default withStyles(s)(Main);
