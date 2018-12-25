import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../assets/images/logo.png';

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
    },

     typography: {
    useNextVariants: true,
  },

});



const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: 'black !important',
    paddingTop: '25px',

  },
  logo: {
    height: 40,
    padding:10,
  },


};

function ToolBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root.palette}>
     <MuiThemeProvider theme={theme}>
      <AppBar color='secondary' position='static'>
        <Toolbar>      
          <Typography variant='h6' color='inherit'>
            <img
            src={logo} 
            className={classes.logo} 
            alt={logo} 
            />
          
          </Typography>
          <Typography variant='h6' position='relative' color='inherit'>
            Tic Tac Toe: Unbeatable AI w/ Minimax Algorithm
          </Typography>
        </Toolbar>
      </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

ToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToolBar);