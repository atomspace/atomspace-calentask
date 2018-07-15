import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import WeekHeader from './WeekHeader/WeekHeader';
import TimeFrame from './TimeFrame/TimeFrame';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  },
});

function Main(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={1.5}>
          <Paper className={classes.paper}>
            <LeftSidebar />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <WeekHeader />
            <TimeFrame />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            x
            <RightSidebar />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Main);
