import React, { Component } from 'react'

class QuizQuestionButton  extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            quiz_position : 1
        }
    }
    render() {
      return (
       
          
             
            <li>
                <button>{this.props.button_text}</button>
            </li>
           
        
      )
    }
  }
export default QuizQuestionButton 