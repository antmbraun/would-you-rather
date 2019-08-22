import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/questions'


class QuestionUnansweredOptions extends Component {

    state = {
        selectedOption: ''
    }

    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const answeredQuestion = {
            authedUser: this.props.authedUserId, 
            qid: this.props.question.id,
            answer: this.state.selectedOption
        }

        this.props.dispatch(
            handleQuestionAnswer(answeredQuestion)
        )
    }
    
    render() {
        const question = this.props.question
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="radio">
                    <label>
                        <input 
                            type="radio" 
                            value="optionOne" 
                            checked={this.state.selectedOption === 'optionOne'}
                            onChange={this.handleOptionChange} />
                        {question.optionOne.text}
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                    <input 
                            type="radio" 
                            value="optionTwo" 
                            checked={this.state.selectedOption === 'optionTwo'}
                            onChange={this.handleOptionChange} />
                        {question.optionTwo.text}
                    </label>
                </div>
                <button type="submit">Vote!</button>
            </form>
        )
    }
}


export default connect()(QuestionUnansweredOptions)



 