import React, { Component } from 'react'
class QuizQuestion extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            quiz_position : 1
        }
    }
    render() {
      return (
        <main>
        <section>
          <p>{this.props.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            //quiz question button logic goes here
            <li>{this.props.quiz_question.answer_options[0]}</li>
          </ul>
        </section>
      </main>
      )
    }
  }
export default QuizQuestion