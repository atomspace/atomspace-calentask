import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Weather.scss';
import WeatherImg from './../../../../../public/u326.svg';

class Weather extends Component {
  render() {
    return (
      <div className={s.Weather}>
        <p className={s.WeatherText}>0*</p>
        <p className={s.WeatherText}>Ясно</p>
        <img src={WeatherImg} style={{float: 'right'}} />
      </div>
    );
  }
}

export default withStyles(s)(Weather);
