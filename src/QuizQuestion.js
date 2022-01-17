import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            quiz_position : 1
        }
    }
    handleClick (buttonText){
       if(buttonText == this.props.quiz_question.answer )
       {
        this.props.showNextQuestionHandler();
       }
       
    }
    render() {
      return (
        <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
                {this.props.quiz_question.answer_options.map((asnwer_option,index)=>{
                  return <QuizQuestionButton key={index} button_text={asnwer_option} clickHandler={this.handleClick.bind(this)} />
                 })}  
          
          </ul>
        </section>
      </main>
      )
    }
  }
export default QuizQuestion