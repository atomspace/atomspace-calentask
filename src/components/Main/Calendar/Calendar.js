import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TimeFrame from '../TimeFrame/TimeFrame';

// TODO: Need better naming
const days = [
  // {
  //   dayOfWeek: null,
  //   day: null,
  // },
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

const styles = () => ({
  root: {
    justifyContent: 'space-between',
  },
  header: {
    justifyContent: 'space-between',
    paddingLeft: '65px',
  },
  table: {
    flexDirection: 'column',
  },
  block: {
    displey: 'flex',
    flexDirection: 'column',
  },
  blockin: {
    paddingBottom: '30px',
    borderBottom: '1px outset black',
  },
  timeframe: {
    position: 'absolute',
    paddingTop: '43px',
  },
});

const CalendarHeader = ({ classes }) => {
  // TODO: change name dayElements to something better

  // TODO: Add stylings for dayOfWeek and day
  const dayElements = days.map(day => (
    <Grid md={1} item key={day.day}>
      <div>{day.dayOfWeek}</div>
      <div>{day.day}</div>
      <Grid md={2}>
        <CalendarTable />
      </Grid>
    </Grid>
  ));

  return (
    <Grid container className={classes}>
      {dayElements}
    </Grid>
  );
};

const CalendarTable = ({ classes, days }) => {
  let arr = [];
  for (let i = 0; i < 13; i++) {
    arr.push(
      <div>
        <Grid item key={i}>
          {`Some`}
        </Grid>
      </div>,
    );
  }

  return (
  <Grid container>
    {arr}
  </Grid>
  );
};

let arr = [];

const Calendar = ({ classes }) => {

  return (
    <Grid className={classes.root}>
      <Grid>
        <TimeFrame classes={classes.timeframe} />
      </Grid>
      <Grid>
        <CalendarHeader classes={classes.header} />
      </Grid>
    </Grid>
  );
}

Calendar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Calendar);
