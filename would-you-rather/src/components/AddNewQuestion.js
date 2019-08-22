import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleSaveQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'

class AddNewQuestion extends Component {

     state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleInputOptionOneChange = (e) => {
        this.setState({
            optionOne: e.target.value,
        });
    }

    handleInputOptionTwoChange = (e) => {
        this.setState({
            optionTwo: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        const question = {
            author: this.props.authedUserId,
            optionOneText: this.state.optionOne,
            optionTwoText: this.state.optionTwo 
        }

        this.props.dispatch(
            handleSaveQuestion(question)
        )
        .then( () => this.setState( () => ({
            toHome: true
        })))
        
    }

    render() {
        if (this.state.toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <div className="addNewQuestionContainer">
                <form className="addNewQuestionForm" onSubmit={this.handleSubmit}>
                    <legend>Would you rather...</legend>
                    <label>
                        <input 
                            type="text" 
                            name="optionOne" 
                            placeholder="option one"
                            required
                            onChange={this.handleInputOptionOneChange} />
                    </label>
                    <label>
                        <input 
                            type="text" 
                            name="optionTwo" 
                            placeholder="option two"
                            required
                            onChange={this.handleInputOptionTwoChange} />
                    </label>
                    <button type="submit">Add!</button>
                </form>
            </div>
        )
    }
}


export default connect((state) => ({
    authedUserId: state.authedUser
  }))(AddNewQuestion)