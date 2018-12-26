import React, { Component } from 'react'
import Human from '../players/Human'
import AI from '../players/Ai'
import Fab from '@material-ui/core/Fab';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';

import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

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

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    padding: 5,
    width: 200,
    height: 100,
    text: 300,
    

  }

});



class Game extends Component {
  constructor() {
    super()
    this.state = {
      gameType: ''
    }
  }

  clickHandler = e => {
    this.setState({
      gameType: e.target.value
    })
  }

  onClick() {
    this.setState({
      gameType: ''
    })
  }

  render() {
    if (this.state.gameType !== '') {
      return (
        <div>
          <button className="leftarrow" onClick={() => this.onClick()}>
            &larr;
          </button>
          {this.state.gameType === 'Human' ? <Human type="Human" /> : <AI type="AI" />}
        </div>
      )
    }

    return (
      
        <MuiThemeProvider theme={theme}>
          <Fab 
          onClick={this.clickHandler} 
        
          style={
            { 
              marginRight:'50px',
              width: 150,
              height: 150, 
          }} 
            
          margin="theme.spacing.unit" 
          className="fab"
          value="AI"
          >
          <PersonIcon
          color="secondary"
          style={
            { 
              width: 100,
              height: 100, 
          }}
          />
          </Fab>



          <Fab 
          onClick={this.clickHandler} 
        
          style={
            { 
              marginRight:'40px',
              width: 150,
              height: 150, 
          }} 
           
          margin="theme.spacing.unit" 
          className="fab"
          value="Human"
          >
          <GroupIcon 
          color="secondary"
          style={
            { 
              width: 100,
              height: 100, 
          }}
          />
          </Fab>
          </MuiThemeProvider>
        
    )
  }
}


export default  withStyles(styles)(Game);

