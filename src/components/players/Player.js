import React from 'react'
import Fab from '@material-ui/core/Fab'


export const Player = props => {
  return (
    <div className="optionpage">
      <h1>{'Choose Player One'}</h1>
      <div className="options">
        <Fab 
        onClick={props.onClick} 
         
          style={
            { 
              marginRight:'50px',
              width: 150,
              height: 150,
              fontSize: '74px', 
              color:'#dd072c',
          }} 
            
          margin="theme.spacing.unit" 
          className="fab"
          value="AI"
          >
          {"X"}
          </Fab>
        <Fab 
        onClick={props.onClick} 
        
          style={
            { 
              marginRight:'50px',
              width: 150,
              height: 150,
              color: "#dd072c",
              fontSize: '74px',
          }} 
            
          margin="theme.spacing.unit" 
          className="fab"
          value="AI"
          >

          {"O"}
          </Fab>
      </div>
    </div>
  )
}