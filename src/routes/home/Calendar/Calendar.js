import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import s from './Calendar.scss';

const getEvent = gql`
  {
    event(id: "5baa638dfb6fc011c0094f53") {
      id
      name
      description
      address
    }
  }
`

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
  constructor() {
		super();
		this.state = {
			showPopup: false
		};
	}

  togglePopup() {
		this.setState({
			showPopup: !this.state.showPopup
		});
	}
  
  displayTime() {
    var arr = [];

    for(var i = 0; i < 24; i++) {
      arr.push(
        <div key={i} className={s.flex}>
          <div className={s.boxtime}>00:00</div>
          <div className={`${s.box} ${s.wide}`}>

          </div>
        </div>
      );
    }
    return arr;
  }

  displayEvent() {
    var data = this.props.data;
    if (data.loading) return (<div>Loading...</div>);
    else{
      return (
      <div>
        <p>{data.event.name}</p>
        <p>{data.event.description}</p>
        <code>{data.event.address}</code>
      </div>
      );
    }
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return(
      <div className={s.Calendar}>
        <div style={{top: '3em'}} className={`${s.flex} ${s.con_box__hor} ${s.abs}`}>
        <div>
          <div className={s.box} style={{border: 0, marginLeft: '13%'}}>333</div>
          <div>

          </div>
        </div>
        <div className={s.flex_col}>
          <div onClick={this.togglePopup.bind(this)} className={s.box}>
            Понедельник
          </div>
          <div className={s.box}>
            Вторник
          </div>
          <div className={s.box}>
            Среда
          </div>
          <div className={s.box}>
            Четверг
          </div>
          <div className={s.box}>
            Пятница
          </div>
          <div className={s.box}>
            Суббота
          </div>
          <div className={s.box}>
            Воскресенье
          </div>
        </div>
      </div>

      <div className={s.abs_container}>
        <div className={`${s.abs_div} ${s.colMonday}`}></div>
        <div className={`${s.abs_div} ${s.colTuesday}`}></div>
        <div className={`${s.abs_div} ${s.colWednesday}`}></div>
        <div className={`${s.abs_div} ${s.colThursday}`}></div>
        <div className={`${s.abs_div} ${s.colFriday}`}></div>
        <div className={`${s.abs_div} ${s.colSaturday}`}></div>
        <div className={`${s.abs_div} ${s.colSunday}`}></div>
      </div>

      <div className={`${s.con_box__vert}`}>
        {this.displayTime()}
        {this.displayEvent()}
      </div>
    </div>
    );
  }
}

export default graphql(getEvent)(withStyles(s)(Calendar));
