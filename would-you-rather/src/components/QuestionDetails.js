import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import QuestionUnansweredOptions from './QuestionUnansweredOptions'
import QuestionAnsweredResults from './QuestionAnsweredResults'


class Question extends Component {

    state = {}

    handleOptionChange() {
        console.log(this)
    }

    componentDidMount () {
        const { id } = this.props.match.params
        this.setState(() => ({ 
            id
        }))
    }
    
    render() {
        const question = this.props.questions[this.state.id]
        const author = question ? this.props.users[question.author] : null
        const answer = this.props.authedUser.answers[this.state.id]
        return (
                <Fragment>
                    {question 
                        ? 
                            (<div className="questionContainer">
                                <img src={author.avatarURL}  alt="" className="avatar"/>
                                <div className="questionDetailsContainer">
                                    <div className="questionTitle">Would you rather...</div>
                                        {answer 
                                            ? <QuestionAnsweredResults question={question} answer={answer} />
                                            : <QuestionUnansweredOptions question={question} authedUserId={this.props.authedUser.id} />
                                        }                        
                                </div>
                            </div>)
                        : <div>404: Couldn't find that question</div>
                    }
                </Fragment>

        )
    }
}


function mapStateToProps ({authedUser, questions, users}) {
    return {
        authedUser: users[authedUser],
        users,
        questions
    }
}

export default connect(mapStateToProps)(Question);
