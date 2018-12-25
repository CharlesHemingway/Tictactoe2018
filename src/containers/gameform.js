import React from 'react';
import PropTypes from 'prop-types';
import Game from '../components/game/Game';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 2,
    color: 'white',
    
  },
});


function GameForm (props) {
	const { classes } = props;
  return (
<Typography className={classes.root} variant="h4" gutterBottom>

              <Game/>
      

</Typography>
      
    );
  }

GameForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameForm);