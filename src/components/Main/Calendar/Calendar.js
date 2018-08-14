import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// TODO: Need better naming
const days = [
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
});

const Calendar = ({ classes }) => (
  <Grid className={classes.root}>
    <Grid>
      {/* TODO: Change days to something better */}
      <CalendarHeader classes={classes.header} days={days} />
    </Grid>
    <Grid>
      <CalendarTable classes={classes.table} days={days} />
    </Grid>
  </Grid>
);

const CalendarHeader = ({ classes, days }) => {
  // TODO: change name dayElements to something better

  // TODO: Add stylings for dayOfWeek and day
  const dayElements = days.map(day => (
    <Grid item key={day.day}>
      <div>{day.dayOfWeek}</div>
      <div>{day.day}</div>
    </Grid>
  ));

  return (
    <Grid container className={classes}>
      {dayElements}
    </Grid>
  );
};

const CalendarTable = ({ classes, days }) => {
  const dayElements = [];

  _.times(13, i => {
    dayElements.push(
      <Grid item key={i}>
        {`Some day ${i}`}
      </Grid>,
    );
  });

  return (
    <Grid container className={classes.block}>
      {dayElements}
    </Grid>
  );
};

Calendar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Calendar);
