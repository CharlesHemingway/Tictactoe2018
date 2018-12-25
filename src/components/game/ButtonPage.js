import React from 'react';
import PropTypes from 'prop-types';
import { 
  withStyles, 
  createMuiTheme, 
  MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
palette: {
        common: {
            black:'#000',
            white:'#fff'
        }
        ,background:{
            paper:'#fff',
            default:'#fafafa'
        }
        ,primary:{
            light:'#7986cb',
            main:'rgba(35, 99, 241, 1)',
            dark:'#303f9f',
            contrastText:'#fff'
        }
        ,secondary:{
            light:'#ff4081',
            main:'rgba(221, 7, 44, 0.78)',
            dark:'#c51162',
            contrastText:'#fff'
        }
        ,error:{
            light:'#e57373',
            main:'#f44336',
            dark:'#d32f2f',
            contrastText:'#fff'
        }
        ,text:{
            primary:'rgba(0, 0, 0, 0.87)',
            secondary:'rgba(0, 0, 0, 0.54)',
            disabled:'rgba(0, 0, 0, 0.38)',
            hint:'rgba(0, 0, 0, 0.38)'
        }
    }

});

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    padding: 5,
    width: 200,
    height: 100,
    text: 300,
    
  },
  input: {
    display: 'none',
  },
});



function ButtonPage(props) {
  const { classes } = props;
  return (
    <div className={classes.palette}>
     <MuiThemeProvider theme={theme}>
      <Button 
      variant="contained" 
      style={{ fontSize: '24px' }} 
      color="primary" 
      className={classes.button}>
        Solo Player
      </Button>
      <Button 
      variant="contained" 
      style={{ fontSize: '24px' }} 
      color="secondary" 
      className={classes.button}>
        Two Player
      </Button>
      </MuiThemeProvider>
    </div>
  );
}

ButtonPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonPage);
